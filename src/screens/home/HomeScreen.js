import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { stopBusAndSchedule } from '../../services/stopService'
import InputSearchRow from '../../ui/InputSearchRow';
import Banner from '../../ui/Banner';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'PegBus'
  }

  state = {
    data: [],
    stopInfo: {},
    error: false,
  }

  getSchedule = async (stopNumber) => {
    try {
      const { shedules, stopInfo } = await stopBusAndSchedule({ stopNumber });
      this.setState({
        error: false,
        data: shedules,
        stopInfo: stopInfo,
      })
    } catch (e) {
      this.setState({
        routes: [],
        stopInfo: {},
        error: true
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.15 }}>
          <InputSearchRow searchHandler={this.getSchedule} />
        </View>
        {this.state.error && (<View>
          <Text>Bus Stop Not Found</Text>
        </View>)}
        <ScrollView
          style={{ flex: 0.7 }}
          contentContainerStyle={styles.contentContainer}>
            {this.state.data.map(item => {
              return (
                <View key={item.id}>
                  <Text>{item.number} | {item.name} | {item.timeEstimated}</Text>
                  <Text>---------</Text>
                </View>
              )
            })}
        </ScrollView>
        <View style={{ flex: 0.15 }}>
            <Banner />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
