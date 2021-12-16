import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Categorys from '../data/categoryData';



const CategoriesScreen = ({navigation}) => {
  console.log(navigation.navigate)
  const renderItemCategory = (item) =>{
    return (
      <TouchableOpacity style={styles.grid} 
        onPress={() => navigation.navigate('CategoriesMeals', 
        {category: item})} >

        <View >
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
        )
    }
  return (
    <>
      <FlatList data={Categorys} 
                renderItem={({item}) => renderItemCategory(item)}  numColumns={2}/>
      </>
  )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    grid: {
        flex: 1,
        margin: 15,
        height: 150,
    }

})

export default CategoriesScreen;