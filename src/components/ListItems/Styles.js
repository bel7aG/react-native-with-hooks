import { ScrollView, View, Text, TextInput, Button } from 'react-native'
import styled from 'styled-components'

export const Container = styled.View`
  padding-top: 20;
  padding-left: 10;
  padding-right: 10;
  min-height: 100%;
`

export const ListScrollViewWrapper = styled.ScrollView`
  background-color: #efefef;
  max-height: 300px;
`

export const SearchBox = styled.View`
  flex-direction: row-reverse;
`

export const MyText = styled.Text`
  color: #000;
  height: 100%;
`

export const MyTextInput = styled.TextInput`
  width: 100%;
  flex: 1;
  border: 1px solid #000;
`

export const MyButton = styled.Button`
  height: '200%';
  font-size: 40;
`
