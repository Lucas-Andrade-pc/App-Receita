import React from 'react'
import {NavigationContainer, DrawerActions} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {TouchableOpacity, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import DrawerNavigation from './DrawerNavigation';


import Colors from '../constant/Color'

const Stack = createNativeStackNavigator();


const MealsNavigator = (props) => {
  const catId = props
  console.log(catId)
  return (
    
      <Stack.Navigator initialRouteName='CategoriesScreen' >
       
        <Stack.Screen name="Meals Categories" 
        component={CategoriesScreen} 
        options={{headerStyle: {
          backgroundColor: Colors.primary
        },
        headerTintColor: '#fff',
        
        headerLeft: (props) => (
          <>
          <TouchableOpacity style={{paddingRight: 10}} onPress={() =>{}}>
            <Icon name='bars' size={25} color={Colors.white}/>
          </TouchableOpacity>
          
         </>
         )
        }}/>
        <Stack.Screen name="CategoriesMeals" 
        component={CategoryMealsScreen}
         options={({route}) => ({title: route.params.category.title, headerStyle:{
          backgroundColor: Colors.primary
         },
         headerTintColor: '#fff',
        
         
         })} />
        
        <Stack.Screen name="Meals Details" 
        component={MealDetailsScreen}
        options={({route}) => ({title: route.params.category.title, headerStyle:{
          backgroundColor: Colors.primary
         },
         headerTintColor: '#fff'
         })}
        />
      </Stack.Navigator>
    
  )
}

export default MealsNavigator;