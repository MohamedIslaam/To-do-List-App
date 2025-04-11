import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React,{useState} from 'react'
import { MMKV } from 'react-native-mmkv';
import Welcome from './components/Welcome';
import LandingPage from './components/LandingPage';

const Stack = createStackNavigator();
const store = new MMKV();
const App = () => {
  const [ isFirst,setIsFirst ] = useState(store.getBoolean('first')??true);

  function notFirst(){
    store.set('first',false);
    setIsFirst(false);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isFirst?'welcome':'hp'} screenOptions={{headerShown:false}}>
        <Stack.Screen name="welcome">
          {prev=><Welcome {...prev} notFirst={notFirst}/>}
        </Stack.Screen>
        <Stack.Screen name="hp">
          {prev=><LandingPage {...prev} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App