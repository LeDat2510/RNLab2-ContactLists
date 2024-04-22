import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Contacts from './src/screens/Contacts';
import StackNavigator from './src/components/Routes';
import TabNavigator from './src/components/Routes';
import DrawerNavigator from './src/components/Routes';

export default function App() {
  return (
    <View style={styles.container}>
      <DrawerNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
