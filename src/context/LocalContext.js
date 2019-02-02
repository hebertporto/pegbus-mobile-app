import React from 'react'

export const LocalContext = React.createContext()

class LocalProvider extends React.Component {
  state = {
    stopInfo: null,
    infoTest: 'Eu vim do Lo'
  }

  updateStopInfo = stopInfo => this.setState({ stopInfo })

  render() {
    return (
      <LocalContext.Provider
        value={{
          state: this.state,
          updateStopInfo: stopInfo => this.updateStopInfo(stopInfo)
        }}
      >
        {this.props.children}
      </LocalContext.Provider>
    )
  }
}

export { LocalProvider }
