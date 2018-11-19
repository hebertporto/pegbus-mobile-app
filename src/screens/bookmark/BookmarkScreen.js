import React from 'react'
import { Map } from './../../ui/Map'
import { SearchNavButton } from '../../ui/buttons'
import { HeaderWithSearchBar } from '../../ui/HeaderWithSearchBar'

export default class BookmarkScreen extends React.Component {
  static navigationOptions = {
    headerRight: <SearchNavButton />,
    header: props => <HeaderWithSearchBar propsHeader={props} />
  }

  render() {
    return <Map />
  }
}
