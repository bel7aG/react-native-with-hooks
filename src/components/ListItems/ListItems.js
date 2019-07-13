import React, { useState } from 'react'
import { MyText, MyTextInput, SearchBox, MyButton } from './Styles'
import Item from '../Item'

const ListItems = () => {
  const [locations, setLocations] = useState([])
  const [term, setTerm] = useState('')

  const handleChangeText = value => {
    setTerm(value)
  }

  const handleAddLocation = () => {
    setLocations([...locations, term])
  }

  const listItems = locations.map(location => (
    <Item key={location} location={location} />
  ))

  return (
    <>
      <SearchBox>
        <MyButton onPress={handleAddLocation} title="Add" />
        <MyTextInput
          placeholder="search..."
          onChangeText={handleChangeText}
          value={term}
        />
      </SearchBox>
      {listItems}
    </>
  )
}

export default ListItems
