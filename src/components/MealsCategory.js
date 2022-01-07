import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MealsCategory = (props) => {
  const image = props.item.image;
  const title = props.item.title;
  const time = props.item.time;

  const { navigation } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Meals Details", { category: props.item })
        }
      >
        <ImageBackground
          style={styles.image}
          source={{ uri: image }}
          resizeMode="cover"
        >
          <View style={styles.containerText}>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>{time}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 1,
    marginVertical: 20,
    

  },
  image: {
    marginTop: 10,
    width: windowWidth,
    height: windowHeight / 3,
  },
  containerText: {
    flex: 1,
    marginTop: 5,
    flexDirection: "row",
    alignItems: 'flex-end',
    justifyContent: "space-around",
  },
  text: {
    fontSize: 15,
    fontFamily: "Roboto-Bold",
    color:'#ccc',
  },
});

export default MealsCategory;
