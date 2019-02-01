import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { LocalContext } from '../context/LocalContext'

// const MyContext = React.createContext()

// class MyProvider extends Component {
//   state = {
//     name: 'Hebert',
//     age: 10
//   }

//   render() {
//     return (
//       <MyContext.Provider
//         value={{
//           state: this.state,
//           changeName: name => this.setState({ name })
//         }}
//       >
//         {this.props.children}
//       </MyContext.Provider>
//     )
//   }
// }

// const Person = () => {
//   return (
//     <MyContext.Consumer>
//       {context => (
//         <View>
//           <Text>{context.state.name}</Text>
//         </View>
//       )}
//     </MyContext.Consumer>
//   )
// }

// const Family = () => {
//   return (
//     <View>
//       <Text>Familia</Text>
//       <Person />
//     </View>
//   )
// }

class TestScreen extends Component {
  render() {
    return (
      <LocalContext.Consumer>
        {context => {
          console.log('context', context)
          return (
            <View>
              <Text>{context.infoTest}</Text>
            </View>
          )
        }}
      </LocalContext.Consumer>
    )
  }
}

export { TestScreen }
