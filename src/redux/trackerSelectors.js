import {createSelector} from "reselect";

const getRoutesItemsSelector = (state) => {
    return state.trackerPage.routesItems
}

export const getRoutesItems = createSelector(getRoutesItemsSelector, (routesItems) => {
    return routesItems.filter(route => true)
})

const getPointsSelector = (state) => {
    return state.trackerPage.points
}

export const getPoints = createSelector(getPointsSelector, (points) => {
    return points.filter(route => true)
})
