import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import moment from 'moment'
import {RkButton} from 'react-native-ui-kitten';
import axios from 'axios'


export default class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  state = {
    date: 'vazio'
  }

  getSchedule = async () => {
    const date = new Date().toISOString() // Iso Date Format to pass to API

    return axios.get(`https://api.winnipegtransit.com/v3/stops/40318/schedule.json?start=${date}&route=44&api-key=NyQGsU66kIXieXPwhzrD`)
      .then(({ data }) => {
        console.log('success',data['stop-schedule']['route-schedules'][0]['scheduled-stops']);
      })
      .catch((error) => {
        // handle error
        console.log('error get', error);
      });
  }

  generateDate = () => {
    const date = new Date().toISOString() // Iso Date Format to pass to API
    console.log('date', date);
    // const date = new Date().toUTCString()
    // start=2018-10-16T03:28:52.873Z
    // start=2018-10-22T21:04:13
    this.setState({ date })
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <View style={styles.getStartedContainer}>
            <RkButton onPress={this.getSchedule}>Click me!</RkButton>
            <Text style={styles.getStartedText}>
              {this.state.date}
            </Text>
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
