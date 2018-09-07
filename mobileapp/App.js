import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ProfileBox } from 'libraryforfsf';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ProfileBox />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
