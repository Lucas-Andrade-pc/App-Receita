import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

import MealsNavigatorTabs from './src/navigation/MealsNavigatorTabs';

import Reducer from './src/store/reducers';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

const fetchFont = () =>{
  return Font.loadAsync({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf')
  })
}

const rootReducer = combineReducers({
  meals: Reducer
})
const store = createStore(rootReducer);

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false)

  if(!fontLoaded){
    return <AppLoading startAsync={fetchFont} onFinish={() => setFontLoaded(true)} onError={console.warn} />
  }

  return (
    <Provider store={store}>
      <MealsNavigatorTabs />
      <StatusBar style='light' />
    </Provider>
    
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
