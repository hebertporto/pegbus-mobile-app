import { Analytics, PageHit, Event } from 'expo-analytics'

const analytics = new Analytics('UA-131723318-2')

export const trackView = screenName => analytics.hit(new PageHit(screenName))

export const trackRouteSearch = routeNumber =>
  analytics.event(new Event('Search Route', routeNumber))
