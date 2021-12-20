import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen'

import Colors from '../constant/Color'

const Stack = createNativeStackNavigator();

const MealsNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='CategoriesScreen'>
        <Stack.Screen name="Meals" 
        component={CategoriesScreen} 
        options={{headerStyle: {
          backgroundColor: Colors.primary
        },
        headerTintColor: '#fff',
        }}/>
        <Stack.Screen name="CategoriesMeals" 
        component={CategoryMealsScreen}
         options={({route}) => ({title: route.params.category.title, headerStyle:{
          backgroundColor: Colors.primary
         },
         headerTintColor: '#fff'
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
    </NavigationContainer>
  )
}

export default MealsNavigator;