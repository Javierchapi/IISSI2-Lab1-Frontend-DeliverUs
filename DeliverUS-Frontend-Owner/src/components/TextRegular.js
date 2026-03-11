import React from 'react'
import { StyleSheet, Text } from 'react-native'
export default function TextRegular(props) {
  const { textStyle, ...inputProps } = props
  //TextStyle cogeria el valor de la propiedad TextStyle de props, y el resto de propiedades de props van a inputProps
  return (
    <Text style={[styles.text, textStyle]} {...inputProps}>
      {props.children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontFamily: 'Montserrat_400Regular'
  }
})
