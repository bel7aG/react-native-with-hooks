import React from 'react'
import {
  TouchableOpacity,
  TouchableHighlight, //IOS,
  TouchableNativeFeedback, // Android
  TouchableWithoutFeedback
} from 'react-native'
import { ItemWrapper, TextItem, MyButton } from './Styles'

const Item = ({ location, handleDeleteLocation, id }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => handleDeleteLocation(id)}>
      <ItemWrapper>
        <TextItem>{location}</TextItem>
        <MyButton onPress={() => alert(id)} title="id" />
      </ItemWrapper>
    </TouchableOpacity>
  )
}

export default Item
