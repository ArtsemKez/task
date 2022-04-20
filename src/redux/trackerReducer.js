let initialState = {
    routesItems: [
        {id: 0, from: 'Minsk', to: 'Moscow'},
        {id: 1, from: 'Moscow', to: 'Minsk'},
        {id: 2, from: 'Moscow', to: 'Minsk'},
        {id: 3, from: 'Moscow', to: 'Minsk'},
        {id: 4, from: 'Moscow', to: 'Minsk'},
    ]
}

export const TrackerReducer = (state = initialState, actions) => {

    switch (actions.type) {
        case 'TASK/TRACKER/SELECT_ROUTE_FROM':
            let routesForFrom = JSON.parse(JSON.stringify(state.routesItems))
            routesForFrom.forEach((route) => {
                if(route.id === actions.id) {
                    route.from = actions.value
                }
            })
            return {...state, routesItems: [...routesForFrom]}

        case 'TASK/TRACKER/SELECT_ROUTE_TO':
            let routesForTo = JSON.parse(JSON.stringify(state.routesItems))
            routesForTo.forEach((route) => {
                if(route.id === actions.id) {
                    route.to = actions.value
                }
            })
            return {...state, routesItems: [...routesForTo]}

        default:
            return state
    }
}

export const actions = {
    selectRouteFrom: (id, value) => ({type: 'TASK/TRACKER/SELECT_ROUTE_FROM', id, value}),
    selectRouteTo: (id, value) => ({type: 'TASK/TRACKER/SELECT_ROUTE_TO', id, value})
}
