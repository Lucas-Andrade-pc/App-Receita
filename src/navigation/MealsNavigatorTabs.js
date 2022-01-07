import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/AntDesign'

import MealsNavigator from './MealsNavigator';

import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen'
import { View } from 'react-native';
import Color from '../constant/Color';

const Tab = createBottomTabNavigator()

const MealsNavigatorTabs = () => {
  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
        tabBarStyle: {
          backgroundColor: Color.primary,
          borderTopColor: 'transparent',
        },
        tabBarActiveTintColor: Color.primary,
        tabBarInactiveTintColor: Color.black,
        
      }}>
            <Tab.Screen name='Home' options={{header: () => (null),
              tabBarIcon: ({color,size}) => (
                <View>
                  <Icon name='home' size={size} color={color}/>
                </View>
              ),
              tabBarActiveTintColor: Color.secundary,
              tabBarInactiveTintColor: 'gray',
            }} component={MealsNavigator}  />
            <Tab.Screen name='Favorit' component={FavoritesScreen} options={{
              headerStyle: {backgroundColor: Color.primary},
              tabBarIcon: ({color, size}) => (
                
                
                <View>
                  <Icon name='star' size={size} color={color} />
                </View>
              ),
              tabBarActiveTintColor: Color.secundary,
              tabBarInactiveTintColor: 'gray',
              }} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default MealsNavigatorTabs;