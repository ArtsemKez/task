let initialState = {
    coordinates: [
        {
            city: 'Minsk',
            coordinates: [53.9024716, 27.5618225]
        },
         {
            city: 'Moscow',
            coordinates: [55.7504461, 37.6174943]
        },
         {
            city: 'Saint Petersburg',
            coordinates: [59.938732, 30.316229]
        },
         {
            city: 'Vilnius',
            coordinates: [54.6870458, 25.2829111]
        },
         {
            city: 'Warsaw',
            coordinates: [52.2337172, 21.071432235636493]
        },
    ],
    routesItems: [
        {id: 0, from: 'Minsk', to: 'Moscow'},
        {id: 1, from: 'Moscow', to: 'Saint Petersburg'},
        {id: 2, from: 'Vilnius', to: 'Warsaw'},
    ],
    points: [],
}

export const TrackerReducer = (state = initialState, actions) => {

    switch (actions.type) {
        case 'TASK/TRACKER/SELECT_ROUTE_FROM':
            let routesForFrom = JSON.parse(JSON.stringify(state.routesItems))
            routesForFrom.forEach((route) => {
                if (route.id === actions.id) {
                    route.from = actions.value
                }
            })
            return {...state, routesItems: [...routesForFrom]}

        case 'TASK/TRACKER/SELECT_ROUTE_TO':
            let routesForTo = JSON.parse(JSON.stringify(state.routesItems))
            routesForTo.forEach((route) => {
                if (route.id === actions.id) {
                    route.to = actions.value
                }
            })
            return {...state, routesItems: [...routesForTo]}

        case 'TASK/TRACKER/ADD_ROUTE':
            let routesForAddRoute = JSON.parse(JSON.stringify(state.routesItems))
            let routeId = 0
            routesForAddRoute.forEach((route) => {
                if (route.id >= routeId) {
                    routeId = route.id + 1
                }
            })
            routesForAddRoute.push({id: routeId, from: null, to: null})
            return {...state, routesItems: [...routesForAddRoute]}

        case 'TASK/TRACKER/DELETE_ROUTE':
            let routesForDeleteRoute = JSON.parse(JSON.stringify(state.routesItems))
            const indexDeletedRoute = routesForDeleteRoute.findIndex(route => route.id === actions.id)
            if (indexDeletedRoute !== -1) {
                routesForDeleteRoute.splice(indexDeletedRoute, 1)
            }
            return {...state, routesItems: [...routesForDeleteRoute]}

        case 'TASK/TRACKER/SET_COORDINATES_FROM':
            let pointsForSetCoordinatesForFrom = JSON.parse(JSON.stringify(state.points))

            pointsForSetCoordinatesForFrom[0] = state.coordinates.filter((from)=>{
                return from.city === actions.from
            })[0].coordinates

            debugger

            return {...state, points: [...pointsForSetCoordinatesForFrom]}

        case 'TASK/TRACKER/SET_COORDINATES_TO':
            let pointsForSetCoordinatesForTo = JSON.parse(JSON.stringify(state.points))

            pointsForSetCoordinatesForTo[1] = state.coordinates.filter((to)=>{
                return to.city === actions.to
            })[0].coordinates

            return {...state, points: [...pointsForSetCoordinatesForTo]}

        default:
            return state
    }
}

export const actions = {
    selectRouteFrom: (id, value) => ({type: 'TASK/TRACKER/SELECT_ROUTE_FROM', id, value}),
    selectRouteTo: (id, value) => ({type: 'TASK/TRACKER/SELECT_ROUTE_TO', id, value}),
    addRoute: () => ({type: 'TASK/TRACKER/ADD_ROUTE'}),
    deleteRoute: (id) => ({type: 'TASK/TRACKER/DELETE_ROUTE', id}),
    setCoordinatesForFrom: (from) => ({type: 'TASK/TRACKER/SET_COORDINATES_FROM', from}),
    setCoordinatesForTo: (to) => ({type: 'TASK/TRACKER/SET_COORDINATES_TO', to}),
}
