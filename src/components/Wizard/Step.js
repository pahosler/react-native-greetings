import React, { PureComponent } from 'react'
import { View } from 'react-native'

export default class Step extends PureComponent {
  render () {
    const { children, currentIndex, isLast, prevStep, nextStep, onChangeValue, onSubmit, values } = this.props

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2 }}>
          {children({
            onChangeValue,
            values,
            prevStep,
            nextStep,
            currentIndex,
            isLast,
            onSubmit
          })}
        </View>
      </View>
    )
  }
}
