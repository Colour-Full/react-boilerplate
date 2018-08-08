// @flow
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../api-todo/actions/setVisibilityFilter'
import Link from '../components/Link'
import type { AppState } from 'src/reducers'
import { getVisibilityFilterFromState } from '../api-todo/connectors/todos'

type FilterProps = {
  filter: string
}

type ActiveProp = {
  active: boolean
}

type onClickProp = {
  onClick: () => void
}

export const mapStateToProps = (state: AppState, ownProps: FilterProps): ActiveProp => {
  // We get the data we want via the connectors ...
  const filter = getVisibilityFilterFromState(state)

  return {
    active: ownProps.filter === filter
  }
}

export const mapDispatchToProps = (dispatch: Dispatch, ownProps: FilterProps): onClickProp => ({
  onClick: () => { dispatch(setVisibilityFilter(ownProps.filter)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
