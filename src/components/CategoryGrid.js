import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryGrid = ({item}) =>{
  return (
    <TouchableOpacity style={styles.grid} 
        onPress={() => navigation.navigate('CategoriesMeals', 
        {category: item})} >
        <View style={styles.screen}>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    margin:20,
    height: 150,
  },
  screen:{
    borderWidth: 1,
    elevation: 1,
  },
  text:{
    fontFamily: 'Roboto-Bold',
  }
})

export default CategoryGrid;