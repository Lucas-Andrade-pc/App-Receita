import React from 'react'
import {TouchableOpacity, Text, Alert} from 'react-native'
import {HeaderButton} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/AntDesign'
import Color from '../constant/Color';

const ButtonHeader = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => Alert.alert('Add favorit', 'add with sucessed',
           [
             {
               text: 'okay', style: 'destructive', onPress: navigation.goBack('CategoriesScreen')
               }
            ])}>
              <Icon name='star' size={25} color={Color.secundary}/>
            </TouchableOpacity>
  )
}

export default ButtonHeader;