import React from 'react';
import { Map } from './../../ui/Map';
import { SearchNavButton } from '../../ui/buttons';

import { HeaderWithSearchBar } from '../../ui/HeaderWithSearchBar'

export default class BookmarkScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const isSearchActive = navigation.getParam('isSearchActive', false);
    return {
      headerRight: <SearchNavButton navigation={navigation} isSearchActive={isSearchActive} />,
      header: (props) => (
        <HeaderWithSearchBar
          isSearchActive={isSearchActive}
          navigation={navigation}
          propsHeader={props}
        />
      ),
    };
  }

  render() {
    return (
      <Map />
    );
  }
}
