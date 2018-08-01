// @flow
import React from 'react'
import type { Element } from 'react'
import FilterLink from '../containers/FilterLinks'
import { VisibilityFilters } from '../api-todo/reducers/visibilityFilter'
import { ButtonGroup } from '@atlaskit/button'

const Footer = (): Element<'div'> => (
  <div>
    <span>Show: </span>
    <ButtonGroup>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
      </FilterLink>
    </ButtonGroup>
  </div>
)

export default Footer
