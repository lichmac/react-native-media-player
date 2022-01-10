import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import {MediaPlayer} from '../../src/MediaPlayer';

export default function App() {

  React.useEffect(() => {
  }, []);

  return (
    <View style={styles.container}>
      <MediaPlayer
        style={styles.box}
        playerStyle={styles.box}
        type={'video'}
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 300,
    height: 300,
  },
});
