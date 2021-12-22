import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback,Image } from 'react-native';

const CategoryGrid = ({item,onPress}) =>{
  console.log(item)
  return (
    <View style={styles.grid}>
      <TouchableNativeFeedback style={{flex: 1}} 
          onPress={() => onPress.navigate('CategoriesMeals', 
          {category: item})} >
          <View style={styles.screen}>
            <Text style={styles.text}>{item.title}</Text>
            <Image source={{uri: item.image}} resizeMode="cover" style={styles.image} />
          </View>
        </TouchableNativeFeedback>
      </View>
  )
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    margin:20,
    height: 140,

  },
  screen:{
    flex: 1,
    elevation: 1,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center'
  
  },
  text:{
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    justifyContent: 'center',
  },
  image:{
    width: '100%', 
    height: '100%',
    borderRadius: 10,

  }
})

export default CategoryGrid;