// @flow

export const SET_VISIBILITY_FILTER: string = 'SET_VISIBILITY_FILTER'

type FilterAction = {
  type: string,
  filter: string
}

export const setVisibilityFilter = (filter: string): FilterAction => ({
  type: SET_VISIBILITY_FILTER,
  filter
})
