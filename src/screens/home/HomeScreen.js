import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { getStopBusesTime } from '../../services/api'
import moment from 'moment'
import InputSearchRow from '../../ui/InputSearchRow';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'PegBus'
  }

  state = {
    data: [],
    error: false,
  }

  getSchedule = async (stopNumber) => {
    try {
      this.setState({ error: false })
      const data = await getStopBusesTime({ stopNumber });
      data.length ? this.setState({ data }) : this.setState({ error: true, data: [] })
    } catch (e) {
      console.log('blah');
    }
  }

  getTime = (estimated, scheduled) => {
    if (estimated === scheduled) {
      return (<Text>
        On Time: {moment(estimated).format('MMMM Do YYYY, h:mm:ss')}
      </Text>)
    }
    return (<Text>
      Err .. new time: {moment(scheduled).format('MMMM Do YYYY, h:mm:ss')}
    </Text>)
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
          style={{ flex: 0.85 }}
          contentContainerStyle={styles.contentContainer}>
            {this.state.data.map((item, index) => {
              return (
                <View key={item.key}>
                  <Text>{item.variant.key.split('-')[0]} | {item.variant.name}</Text>
                  {this.getTime(item.times.arrival.estimated, item.times.arrival.scheduled)}
                  <Text>---------</Text>
                </View>
              )
            })}
        </ScrollView>
      </View>
    );
  }
}

// {
//     "bus": Object {
//       "bike-rack": "false",
//       "key": 814,
//       "wifi": "false",
//     },
//     "cancelled": "false",
//     "key": "9832164-68",
//     "times": Object {
//       "arrival": Object {
//         "estimated": "2018-10-20T23:18:40",
//         "scheduled": "2018-10-20T23:18:40",
//       },
//       "departure": Object {
//         "estimated": "2018-10-20T23:18:40",
//         "scheduled": "2018-10-20T23:18:40",
//       },
//     },
//     "variant": Object {
//       "key": "11-1-R",
//       "name": "Portage-Kildonan to North Kildonan via Rothesay",
//     },
//   }

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
