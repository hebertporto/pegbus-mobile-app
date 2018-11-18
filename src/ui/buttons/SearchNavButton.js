import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const SearchNavButton = ({ navigation, isSearchActive }) => {
  return (
    <TouchableOpacity onPress={() => navigation.setParams({ isSearchActive: true })}>
      <Text>{`${isSearchActive}`}</Text>
    </TouchableOpacity>
  );
};

export { SearchNavButton };
