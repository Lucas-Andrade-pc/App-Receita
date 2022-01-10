import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
} from "react-native";
import Details from "../components/Details";
import ButtonHeader from "../components/HeaderButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MealDetailsScreen = (props) => {
  const title = props.route.params.category.title;
  const ingredients = props.route.params.category.Ingredients;
  const preparativos = props.route.params.category.Preparation;
  const image = props.route.params.category.image;

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => <ButtonHeader navigation={props.navigation} />,
    });
  }, [props.navigation]);

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Image
          style={styles.image}
          source={{ uri: image }}
          resizeMode="contain"
        />

        <View style={styles.containerTitle}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <FlatList
            data={ingredients}
            renderItem={({ item }) => <Details item={item} />}
            keyExtractor={({ index }) => index}
          />
        </View>
        <View>
          <FlatList
            data={preparativos}
            renderItem={({ item }) => <Details item={item} />}
            keyExtractor={({ index }) => index}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {},
  image: {
    width: windowWidth,
    height: windowHeight / 3,
  },
  containerTitle:{
    marginVertical: 20,
  },
  title:{
    fontFamily: 'Roboto-Regular',
    fontStyle: 'italic',
    fontSize: 25,
    padding: 5,
  }
});

export default MealDetailsScreen;
