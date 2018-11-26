import { Platform } from 'react-native'
import { Colors } from './Colors'

const type = {
  light: {
    ...Platform.select({
      android: { fontFamily: 'sans-serif-light' },
      ios: { fontWeight: '300' }
    })
  },
  regular: {
    ...Platform.select({
      android: { fontFamily: 'sans-serif' },
      ios: { fontWeight: '400' }
    })
  },
  medium: {
    ...Platform.select({
      android: { fontFamily: 'sans-serif-medium' },
      ios: { fontWeight: '700' }
    })
  }
}

const size = {
  h1: 42,
  h2: 34,
  h3: 28,
  h4: 22,
  h5: 20,
  h6: 17,
  input: Platform.OS === 'ios' ? 17 : 15,
  regular: 17,
  button: Platform.OS === 'ios' ? 17 : 14,
  secondaryButton: Platform.OS === 'ios' ? 15 : 12,
  medium: 15,
  small: 13,
  tiny: 11
}

const lineHeight = {
  boost: 24,
  regular: 20,
  small: 16
}

const style = {
  title: {
    ...type.medium,
    fontSize: size.medium
  },
  primaryButton: {
    ...type.medium,
    fontSize: size.medium
  },
  secondaryButton: {
    ...type.medium,
    fontSize: size.secondaryButton
  },
  footNote: {
    ...type.regular,
    fontSize: size.small
  }
}

const standardStyle = {
  h2: {
    fontSize: size.h2,
    color: Colors.BLACK_PRIMARY_ALT,
    ...type.medium
  },
  h6: {
    fontSize: size.h6,
    color: Colors.BLACK_PRIMARY_ALT,
    ...type.medium
  },
  p: {
    fontSize: size.regular,
    lineHeight: lineHeight.boost,
    color: Colors.BLACK_SECONDARY_ALT,
    ...type.regular
  },
  pEmphasis: {
    fontSize: size.regular,
    lineHeight: lineHeight.boost,
    color: Colors.BLACK_PRIMARY_ALT,
    ...type.regular
  },
  description: {
    fontSize: size.medium,
    lineHeight: lineHeight.regular,
    color: Colors.BLACK_SECONDARY_ALT,
    ...type.regular
  },
  descriptionEmphasis: {
    fontSize: size.medium,
    lineHeight: lineHeight.regular,
    color: Colors.BLACK_PRIMARY_ALT,
    ...type.regular
  },
  caption: {
    fontSize: size.small,
    lineHeight: lineHeight.small,
    color: Colors.BLACK_SECONDARY_ALT,
    ...type.regular
  },
  captionEmphasis: {
    fontSize: size.small,
    lineHeight: lineHeight.small,
    color: Colors.BLACK_PRIMARY_ALT,
    ...type.regular
  }
}

export const Fonts = {
  lineHeight,
  size,
  standardStyle,
  style,
  type
}
