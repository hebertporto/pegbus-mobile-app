import React from 'react'

export const LocalContext = React.createContext()

class LocalProvider extends React.Component {
  state = {
    stopInfo: {},
    infoTest: 'Eu vim do Lo'
  }

  updateStopInfo = stopInfo => this.setState({ stopInfo })

  render() {
    return (
      <LocalContext.Provider value={this.state}>
        {this.props.children}
      </LocalContext.Provider>
    )
  }
}

export { LocalProvider }
