import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from './cdf.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#403534', fontSize: 18, backgroundColor: 'yellow' }}>We have it working Kim! Yay</Text>
      <Image source={logo} style={{ width: 200, height: 200, marginTop: 30}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#304944',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
