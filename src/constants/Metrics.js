import { Platform } from 'react-native'

const SNAP_BUTTON = 64

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 0 : 24
const NAV_BAR_DATA_HEIGHT = Platform.OS === 'ios' ? 44 : 56
const NAV_BAR_HEIGHT = STATUS_BAR_HEIGHT + NAV_BAR_DATA_HEIGHT
const TITLE_ROW = 56
const NAV_BAR_HEIGHT_LARGE = NAV_BAR_HEIGHT + TITLE_ROW

const CHIP_HEIGHT = 32

const SPINNER_HEIGHT = {
  small: 20,
}

export const Metrics = {
  NANO: 4,
  MILLI: 6,
  BIT: 8,
  BYTE: 12,
  KILO: 16,
  MEGA: 24,
  GIGA: 32,
  TERA: 40,

  SNAP_BUTTON,
  SNAP_RADIUS: SNAP_BUTTON / 2,

  STATUS_BAR_HEIGHT,
  NAV_BAR_DATA_HEIGHT,
  NAV_BAR_HEIGHT,
  NAV_BAR_HEIGHT_LARGE,

  SPINNER_HEIGHT,
  LOADING_CONTAINER_HEIGHT: SPINNER_HEIGHT.small + 16,
  BORDER_WIDTH: 1,
  BORDER_RADIUS: 8,
  CHIP_RADIUS: CHIP_HEIGHT / 2,

  ICONS: {
    tiny: 12,
    small: 18,
    medium: 24,
    large: 32,
    xl: 56,
    xxl: 72,
    xxxl: 88,
  },
  ICON_TOUCHABLE_AREA_DENSE: 48,
  ICON_TOUCHABLE_AREA: 48,

  CHIP_HEIGHT,
  BUTTON_HEIGHT_DENSE: 40,
  BUTTON_HEIGHT_STANDARD: 44,

  RATIO: {
    square: 1,
    standard: 4 / 3,
    wide: 16 / 9,
    wideVertical: 9 / 16,
  },
  MAX_ERROR_MESSAGE_HEIGHT: 48,
}
