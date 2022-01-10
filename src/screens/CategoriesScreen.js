import React, {useRef} from "react";
import { View, FlatList, StyleSheet, Image, Animated } from "react-native";
import Categorys from "../service/categoryData";
import CategoryGrid from "../components/CategoryGrid";
import { useSelector } from "react-redux";

const CategoriesScreen = ({ navigation }) => {
  const meals = useSelector((state) => state.meals.data);

  const renderItemCategory = (item) => {
    return <CategoryGrid item={item} navigation={navigation} />;
  };

  const image =
    "https://blog.zanottirefrigeracao.com.br/wp-content/uploads/chef-cozinha-profissional.jpg";
    const scrollY = useRef(new Animated.Value(0)).current 
  return (
    <>
      <Image
        source={{ uri: image }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={0}
      />
      <Animated.FlatList
        data={meals}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true}
        )}
        renderItem={({ item }) => renderItemCategory(item)}
        numColumns={2}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
