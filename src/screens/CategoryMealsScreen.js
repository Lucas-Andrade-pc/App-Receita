import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  ImageBackground,
  ScrollView,
} from "react-native";

import ButtonHeader from "../components/HeaderButton";
import Categorys from "../service/categoryData";
import MealsCategory from "../components/MealsCategory";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CategoryMealsScreen = (props) => {
  const catId = props.route.params.category.id;
  const meals = props.route.params.category.meals;
  
  const selected = Categorys.find((cat) => cat.id === catId);
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => <ButtonHeader navigation={props.navigation} />,
    });
  }, [props.navigation]);
  return (
    <>
      <View style={styles.screen}>
        {/* <ImageBackground source={{ uri: image }} style={styles.image}>
          <View style={styles.containerTextBackground}>
            <Text style={styles.textBackGround}>{time}</Text>
          </View> */}
        {/* </ImageBackground> */}
        <FlatList
          data={meals}
          renderItem={({ item, index }) => <MealsCategory item={item} navigation={props.navigation}/>}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    width: windowWidth,
    height: windowHeight / 3,
  },
  textTitle: {
    marginVertical: 20,
    fontSize: 27,
    padding: 10,
    fontFamily: "Roboto-Bold",
  },
  textIngredients: {
    fontFamily: "Roboto-Regular",
    fontSize: 17,
  },
  textPre: {
    fontFamily: "Roboto-Regular",
    fontSize: 17,
  },
  containerTextBackground: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: "flex-end",
  },
  textBackGround: {
    fontFamily: "Roboto-Bold",
    fontSize: 23,
    color: "#298",
  },
});

export default CategoryMealsScreen;
