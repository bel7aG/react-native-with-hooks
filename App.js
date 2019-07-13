import React, { useState, useEffect } from 'react'
import { Platform, Text, View, Modal } from 'react-native'
import ListItems from './src/components/ListItems/ListItems'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

type Props = {}

const App = () => {
  const [term, setTerm] = useState('')

  const handleChange = value => {
    setTerm(value)
  }

  return (
    <View>
      <ListItems />
    </View>
  )
}

export default App
