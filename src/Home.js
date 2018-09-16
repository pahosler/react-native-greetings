import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Button } from 'react-native-elements';
import Wizard from "./components/Wizard";

const defaultData = [
  {label: 'Halloween', data: {}},
  {label: 'Birthday', data: {}},
  {label: 'Love', data: {}},
  {label: 'Get Well  Soon', data: {}}
];

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Wizard>
          <Wizard.Step>
            {({ nextStep, prevStep, values }) => {
              return (
                <View>
                  <FlatList
                    data={defaultData}
                    renderItem={({item}) => <Button title={item.label} onPress={nextStep}/>}
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
                  <Button title="back" onPress={prevStep} />
                  <Button title="edit" onPress={submit} />
                </View>
              );
            }}
          </Wizard.Step>
        </Wizard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ededed",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50
  },
  toolBar: {
    backgroundColor: "#00a5ba",
    height: 36,
    marginTop: 25
  }
});
