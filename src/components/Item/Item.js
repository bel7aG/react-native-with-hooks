import React from 'react'
import { ItemWrapper, TextItem } from './Styles'

const Item = ({ location }) => {
  return (
    <ItemWrapper>
      <TextItem>{location}</TextItem>
    </ItemWrapper>
  )
}

export default Item
