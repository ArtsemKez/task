let initialState = {
    routesItems: [

    ]
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

        default:
            return state
    }
}

export const actions = {
    selectRouteFrom: (id, value) => ({type: 'TASK/TRACKER/SELECT_ROUTE_FROM', id, value}),
    selectRouteTo: (id, value) => ({type: 'TASK/TRACKER/SELECT_ROUTE_TO', id, value}),
    addRoute: () => ({type: 'TASK/TRACKER/ADD_ROUTE'}),
    deleteRoute: (id) => ({type: 'TASK/TRACKER/DELETE_ROUTE', id}),
}
