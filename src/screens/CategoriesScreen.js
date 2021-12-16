import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CategoriesScreen = ({navigation}) => {
  return (
      <View style={styles.screen}>
          <Text>Categories screen</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('CategoriesMeals')}>
              <Text> Go to Meals</Text>
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

export default CategoriesScreen;