import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Refeicoes, avaliar } from './src/pages';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cardápio Online" component={Home} />
        <Stack.Screen name="Refeicoes" component={Refeicoes} />
        <Stack.Screen name="avaliacao" component={avaliar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Routes />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
