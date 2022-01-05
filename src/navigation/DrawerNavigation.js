import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import FiltersScreen from '../screens/FiltersScreen'

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer name="Home" component={FiltersScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigation;