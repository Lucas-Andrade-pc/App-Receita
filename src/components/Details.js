import React from 'react';
import { View,Text,StyleSheet} from 'react-native';

// import { Container } from './styles';

const Details = ({item}) => {
  return (
    
    <View style={styles.screen}>
      <Text key={item} style={styles.text}>{item}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    marginVertical: 10,
    marginLeft: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    maxWidth: '85%',
  },
  text: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  }
})

export default Details;