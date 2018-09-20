import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Button } from 'react-native-elements';
import Wizard from './components/Wizard';

const defaultData = [
  { label: 'Holiday', data: { a: require('./assets/pumpkin.png') } },
  { label: 'Birthday', data: { a: require('./assets/cake.png') } },
  { label: 'Love', data: { a: require('./assets/tp-heart.png') } },
  { label: 'Get Well  Soon', data: { a: require('./assets/getwell.png') } }
];

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', marginTop: 25 }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'yellow',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Image
              style={{ height: 150, width: 150 }}
              source={defaultData[1].data.a}
            />
            <Text>{defaultData[1].label}</Text>
          </View>
          <View
            style={
              {
                flex: 1,
                backgroundColor: '#505050',
                justifyContent: 'center',
                alignItems: 'center'
              } //'#f0af30',
            }>
            <Image
              style={{ height: 150, width: 150 }}
              source={defaultData[0].data.a}
            />
            <Text>{defaultData[0].label}</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'steelblue',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Image
              style={{ height: 150, width: 150 }}
              source={defaultData[3].data.a}
            />
            <Text>{defaultData[3].label}</Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: '#ff9999',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Image
              style={{ height: 150, width: 130 }}
              source={defaultData[2].data.a}
            />
            <Text>{defaultData[2].label}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ededed',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  toolBar: {
    backgroundColor: '#00a5ba',
    height: 36,
    marginTop: 25
  }
});

/*
<View style={{ flex: 1, flexDirection: "column" }}>
  <View style={{ flex: 1, flexDirection: 'row' }}>
    <View style={{ flex: 1, backgroundColor: 'yellow' }} />
    <View style={{ flex: 1, backgroundColor: '#f0af30' }} />
  </View>
  <View style={{ flex: 1, flexDirection: 'row' }}>
    <View style={{ flex: 1, backgroundColor: 'steelblue' }} />
    <View style={{ flex: 1, backgroundColor: '#ff9999' }} />
  </View>
</View >
*/
/*
<View style={styles.container}>
        <Wizard>
          <Wizard.Step>
            {({ nextStep, prevStep, values }) => {
              return (
                <View>
                  <FlatList
                    data={defaultData}
                    renderItem={({ item }) => (
                      <View>
                        <Image
                          source={item.data.a}
                          style={{ height: 140, width: 140 }}
                        />
                        <Button title={item.label} onPress={nextStep} />
                      </View>
                    )}
                    keyExtractor={(item, index) => item.label}
                  />
                </View>
              );
            }}
          </Wizard.Step>
          <Wizard.Step>
            {({ prevStep, submit, values }) => {
              return (
                <View>
                  <Text>Final</Text>
                  <Text>{values.data}</Text>
                  <Button title="back" onPress={prevStep} />
                  <Button title="edit" onPress={submit} />
                </View>
              );
            }}
          </Wizard.Step>
        </Wizard>
      </View>
*/
