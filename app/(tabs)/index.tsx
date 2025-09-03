import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const GitHubPageView = () => (
  <View style={styles.container}>
    <WebView
      source={{ uri: 'https://sidld.github.io/' }}
      style={{ flex: 1 }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default GitHubPageView;
