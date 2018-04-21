// @flow

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchData } from './actions/fetch_hello_world'
import { detectBrowser } from 'rulsoft-browser-logger'

type Props = {
  hi: any,
  logger: () => mixed,
  fetchData: any,
  helloWorld: {
    loading: boolean,
    string: {
      hello: ?string
    }
  }
}

type State = {
  hi: ?string,
}
class HelloWorld extends React.Component<Props, State> {
  constructor (props) {
    super(props)
    props = {
      hi: undefined,
      logger: this.props.logger,
      fetchData: this.props.fetchData,
      helloWorld: {
        loading: this.props.helloWorld.loading,
        string: {
          hello: undefined
        }
      }
    }
    this.state = {
      hi: this.props.hi
    }
  }
  componentWillMount () {
    const browser = detectBrowser()
    this.props.logger.info({browser: browser}, 'Hi from the client')
    setTimeout(
      () => this.props.fetchData('http://example.com/helloWorld'),
      1000)
  }

  render () {
    if (this.props.helloWorld.loading) {
      return (
        <div>
          <h1>...LOADING</h1>
        </div>
      )
    }
    if (!this.props.helloWorld.loading) {
      return (
        <div>
          <h1>{this.props.helloWorld.string.hello}</h1>
        </div>
      )
    }
  }
}

function mapStateToProps (state) {
  return {
    helloWorld: state.helloWorld
  }
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchData: fetchData}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld)
// export default HelloWorld
