import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen'

const Stack = createNativeStackNavigator();

const MealsNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Meals" component={CategoriesScreen}/>
                <Stack.Screen name="CategoriesMeals" component={CategoryMealsScreen}/>
                <Stack.Screen name="Meals Details" component={MealDetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MealsNavigator;