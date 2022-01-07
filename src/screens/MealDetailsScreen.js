import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const MealDetailsScreen = (props) => {
  return (
      <View style={styles.screen}>
          <Text>The meals details screen</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }

})

export default MealDetailsScreen;

{/* <Text style={styles.textTitle}>
            {props.route.params.category.title}
          </Text>
          <View style={{ marginVertical: 10, paddingLeft: 10 }}>
            <Text style={{fontFamily: 'Roboto-Regular',fontSize: 25}}>{ingr}</Text>
            {ingredients?.map((item) => (
              <View
                key={item}
                style={{
                  padding: 10,
                  elevation: 1,
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
          </View> */}