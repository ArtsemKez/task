let initialState = {
    routesItems: [
        {id:1, from: 'Minsk', to: 'Moscow'},
        {id:2, from: 'Moscow', to: 'Minsk'}
    ]
}

export const TrackerReducer = (state = initialState, actions) => {
    switch (actions.type) {


        default:
            return state
    }
}

export const actions = {

}
