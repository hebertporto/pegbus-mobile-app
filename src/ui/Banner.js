import React from "react";
import { AdMobBanner } from "expo";

import styles from './styles/banner.style';

const bannerError = (e) => console.log('error', e);

export default Banner = () => {
  return (
    <AdMobBanner
      style={styles.bottomBanner}
      bannerSize="fullBanner"
      adUnitID="ca-app-pub-8356555649836141/3045129929"
      testDeviceID="EMULATOR"
      didFailToReceiveAdWithError={bannerError}
    />
  )
}


