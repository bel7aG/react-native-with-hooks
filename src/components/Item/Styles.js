import { View, Text, Button } from 'react-native'
import styled from 'styled-components'

export const ItemWrapper = styled.View`
  margin-top: 30;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-height: 30;
`

export const TextItem = styled.Text`
  color: #fff;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #222;
  text-align: center;
  text-align-vertical: center;
`

export const MyButton = styled.Button`
  max-height: 10;
`
