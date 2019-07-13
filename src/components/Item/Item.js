import React from 'react'
import { ItemWrapper, TextItem, MyButton } from './Styles'

const Item = ({ location, handleDeleteLocation, id }) => {
  return (
    <ItemWrapper>
      <TextItem>{location}</TextItem>
      <MyButton onPress={() => handleDeleteLocation(id)} title="Delete" />
    </ItemWrapper>
  )
}

export default Item
