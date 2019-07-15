import { View, Text, Button } from 'react-native'
import styled from 'styled-components'

export const ItemWrapper = styled.View`
  margin-top: 30;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-height: 50;
`

export const TextItem = styled.Text`
  color: #fff;
  flex: 0.8;
  justify-content: center;
  align-items: center;
  background-color: #222;
  text-align: center;
  text-align-vertical: center;
`

export const MyButton = styled.Button`
  max-height: 10;
`
