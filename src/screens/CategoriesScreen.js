import React from 'react';
import {View, FlatList, StyleSheet } from 'react-native';
import Categorys from '../service/categoryData';
import CategoryGrid from '../components/CategoryGrid';
import {useSelector} from 'react-redux'

const CategoriesScreen = ({navigation}) => {
  
  const meals = useSelector(state => state.meals.data)

  const renderItemCategory = (item) =>{
    return (
        <CategoryGrid item={item} navigation={navigation} />
    )
  }

  return (
    <>
      <FlatList data={meals} 
                renderItem={({item}) => renderItemCategory(item)}  numColumns={2}/>
      </>
  )
}

const styles = StyleSheet.create({
  
  
  

})

export default CategoriesScreen;