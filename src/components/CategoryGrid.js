import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Image,
  Animated
} from "react-native";


const CategoryGrid = ({ item, navigation }) => {
  const inputRange = [
    -1,
    0,
    70,
    140,
  ]
  const scrollY = useRef(new Animated.Value(0)).current 
  const scale = scrollY.interpolate({
    inputRange,
    outputRange: [1,1,1,0]
  })
  return (
    <>
     
      <Animated.View style={{...styles.grid, transform: [{scale}]}}>
        <TouchableNativeFeedback
          style={{ flex: 1, elevation: 2 }}
          onPress={() =>
            navigation.navigate("CategoriesMeals", { category: item })
          }
        >
          <View style={styles.screen}>
            <Text style={styles.text}>{item.title}</Text>
            <Image
              source={{ uri: item.image }}
              resizeMode="cover"
              style={styles.image}
            />
          </View>
        </TouchableNativeFeedback>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    margin: 20,
    height: 140,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: .3,
    shadowRadius: 20,
    
  
  },
  screen: {
    flex: 1,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    fontFamily: "Roboto-Bold",
    fontSize: 18,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

export default CategoryGrid;
