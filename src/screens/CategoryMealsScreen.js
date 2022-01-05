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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CategoryMealsScreen = (props) => {
  const catId = props.route.params.category.id;
  const time = props.route.params.category.time;
  const image = props.route.params.category.image;
  const [textPreparation, setTextPreparation] = useState(
    props.route.params.category.Preparation
  );
  const [ingredients, setIngredientes] = useState(
    props.route.params.category.Ingredients
  );

  const selected = Categorys.find((cat) => cat.id === catId);
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => <ButtonHeader navigation={props.navigation} />,
    });
  }, [props.navigation]);
  return (
    <>
      <View style={styles.screen}>
        <ImageBackground source={{ uri: image }} style={styles.image}>
          <View style={styles.containerTextBackground}>
            <Text style={styles.textBackGround}>{time}</Text>
          </View>
        </ImageBackground>
        <ScrollView>
          <Text style={styles.textTitle}>
            {props.route.params.category.title}
          </Text>
          <View style={{ marginVertical: 10, paddingLeft: 10 }}>
            {ingredients?.map((item) => (
              <View
                key={item}
                style={{
                  padding: 10,
                  elevation: 2,
                  borderWidth: 1,
                  borderColor: "#ccc",
                  marginVertical: 10,
                }}
              >
                <Text style={styles.textIngredients} key={item}>
                  {item}
                </Text>
              </View>
            ))}
          </View>
          <View style={{ marginVertical: 10, paddingLeft: 10 }}>
            {textPreparation?.map((item) => (
              <View
                key={item}
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: "#ccc",
                  marginVertical: 10,
                }}
              >
                <Text style={styles.textPre} key={item}>
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
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
