import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Categorys from '../data/categoryData';

const CategoryMealsScreen = (props) => {
  const catId = props.route.params.category.id

  console.log(catId)

  const selected = Categorys.find(cat => cat.id === catId)
  
  return (
      <View style={styles.screen}>
          <Text>The category Meals screen</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Meals Details')}>
              <Text>{selected.title}</Text>
          </TouchableOpacity>
      </View>
  )
}

CategoryMealsScreen.navigationOption={
    headerTitle: 'brigadeiro'
    
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }

})

export default CategoryMealsScreen;