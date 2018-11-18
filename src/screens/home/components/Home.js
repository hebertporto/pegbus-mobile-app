import React, { Component } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { stopBusAndSchedule, stopBusRoutes } from '../../../services/stopService'
import InputSearchRow from '../../../ui/InputSearchRow';
import Banner from '../../../ui/Banner';

import ScheduleItem from '../../../ui/ScheduleItem';
import HeaderStopInfo from '../../../ui/HeaderStopInfo';

import { BusStopHeader } from './BusStopHeader';

const defaultState = {
  data: [],
  routes: [],
  stopInfo: {},
  error: false,
}

class Home extends Component {
  state = defaultState;

  getSchedule = async (stopNumber) => {
    this.setState(defaultState);
    try {
      const { shedules, stopInfo } = await stopBusAndSchedule({ stopNumber });
      const routes = await stopBusRoutes({ stopNumber });
      this.setState({
        routes,
        stopInfo,
        data: shedules,
        error: false,
      })
    } catch (e) {
      this.setState({
        data: [],
        routes: [],
        stopInfo: {},
        error: true
      })
    }
  }

  render() {
    const { stopInfo, routes } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.15 }}>
          <InputSearchRow searchHandler={this.getSchedule} />
        </View>
        <View>
          <BusStopHeader stopInfo={stopInfo} routes={routes} />
        </View>
        {this.state.error && (<View>
          <Text>Bus Stop Not Found</Text>
        </View>)}
        <ScrollView
          style={{ flex: 0.40 }}
          contentContainerStyle={styles.contentContainer}>
            {this.state.data.map(item => {
              return (
                <View key={item.id}>
                  <Text>{item.number} | {item.name}</Text>
                  <Text style={{ marginLeft: 10 }}>
                    Scheduled: {item.timeScheduled} |
                    Estimated: {item.timeEstimated}
                  </Text>
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

export { Home };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginHorizontal: 10
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
  }
});