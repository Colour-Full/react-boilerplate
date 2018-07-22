// @flow
import React from 'react'
import type { Element } from 'react'
import FilterLink from '../containers/FilterLinks'
import { VisibilityFilters } from '../api-todo/reducers/visibilityFilter'

const Footer = (): Element<'div'> => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </div>
)

export default Footer
