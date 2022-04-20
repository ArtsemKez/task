import {createSelector} from "reselect";

export const getRoutesItemsSelector = (state) => {
    return state.trackerPage.routesItems
}

export const getRoutesItems = createSelector(getRoutesItemsSelector, (routesItems) => {
    return routesItems.filter(route => true)
})
