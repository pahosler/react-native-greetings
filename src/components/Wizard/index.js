import React, { PureComponent } from 'react'
import { View } from 'react-native'
import Step from './Step'

class Wizard extends PureComponent {
  static Step = (props) => <Step {...props} />
  state = {
    index: 0,
    values: {
      ...this.props.initialValues
    }
  }

  _prevStep = () => {
    if (this.state.index <= 0) return
    this.setState(prevState => ({
      index: prevState.index - 1
    }))
  }

  _nextStep = () => {
    if (this.state.index >= this.props.children.length - 1) {
      return
    }

    this.setState(prevState => ({
      index: prevState.index + 1
    }))
  }

  _onChangeValue = (name, value) => {
    this.setState(prevState => ({
      values: {
        ...prevState.values,
        [name]: value
      }
    }))
  }

  _onSubmit = () => {
    this.props.onSubmit(this.state.values)
  }

  render () {
    const { children } = this.props
    const enabledSteps = React.Children.toArray(children).filter(child => !child.props.disabled)

    return (
      <View style={{ flex: 1 }}>
        {enabledSteps.map((c, i) => {
          return (i === this.state.index)
            ? React.cloneElement(c, {
              currentIndex: this.state.index,
              prevStep: this._prevStep,
              nextStep: this._nextStep,
              onChangeValue: this._onChangeValue,
              onSubmit: this._onSubmit,
              isLast: this.state.index === this.props.children.length - 1,
              values: this.state.values
            })
            : null
        })}
      </View>
    )
  }
}

export default Wizard
