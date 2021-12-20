import React from 'react';
import {FlatList, StyleSheet } from 'react-native';
import Categorys from '../data/categoryData';
import CategoryGrid from '../components/CategoryGrid';


const CategoriesScreen = ({navigation}) => {
  
  const renderItemCategory = (item) =>{
    return (
      <CategoryGrid item={item}/>
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
  
  
  

})

export default CategoriesScreen;