import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryMealsScreen = ({navigation}) => {
  return (
      <View style={styles.screen}>
          <Text>The category Meals screen</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Meals Details')}>
              <Text> Go to Details</Text>
          </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }

})

export default CategoryMealsScreen;