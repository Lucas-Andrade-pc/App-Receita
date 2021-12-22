import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import Categorys from '../data/categoryData';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CategoryMealsScreen = (props) => {
  const catId = props.route.params.category.id
  const image = props.route.params.category.image
  const [textPreparation, setTextPreparation] = useState(props.route.params.category.Preparation)
  const [ingredients, setIngredientes] = useState(props.route.params.category.Ingredients)
  
  console.log(ingredients)

  const selected = Categorys.find(cat => cat.id === catId)
  
  return (
      <View style={styles.screen}>
          <Image source={{uri: image}} style={styles.image} />
          <Text style={styles.textTitle}>{props.route.params.category.title}</Text>
          <View style={{marginVertical: 10, paddingLeft: 10}}>
            {ingredients?.map((item) => (
                <Text style={styles.textIngredients} key={item}>{item}</Text>
            ))}
          </View>
          <View style={{marginVertical: 10, paddingLeft: 10}}>
            {textPreparation?.map((item) => (
                <Text style={styles.textPre} key={item}>{item}</Text>
            ))}
          </View>
          {/* <TouchableOpacity onPress={() => props.navigation.navigate('Meals Details', {category: props.route.params.category})}>
              <Text>{selected.title}</Text>
          </TouchableOpacity> */}
      </View>
  )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
    },
    image:{
        width: windowWidth,
        height: windowHeight / 3,
    },
    textTitle:{
        marginVertical: 20,
        fontSize: 27,
        padding: 10,
        fontFamily: 'Roboto-Bold'
    },
    textIngredients:{},
    textPre:{
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
    }

})

export default CategoryMealsScreen;