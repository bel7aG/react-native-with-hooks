import React, { useState } from 'react'
import uuid from 'uuid'
import { MyText, MyTextInput, SearchBox, MyButton } from './Styles'
import Item from '../Item'

const ListItems = () => {
  const [locations, setLocations] = useState([{ id: 123, location: 'first item' }])
  const [term, setTerm] = useState('')

  const handleChangeText = value => {
    setTerm(value)
  }

  const handleAddLocation = () => {
    setLocations([...locations, { id: uuid(), location: term }])
  }

  const handleDeleteLocation = id => {
    setLocations(locations.filter(location => location.id !== id))
  }

  const listItems = locations.map(({ location, id }) => (
    <Item
      key={id}
      id={id}
      location={location}
      handleDeleteLocation={handleDeleteLocation}
    />
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
