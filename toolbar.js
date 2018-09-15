import React from 'react';
import { View, ToolbarAndroid } from 'react-native';
import { IconsMap, IconsLoaded } from './appIcons';
import { Entypo } from '@expo/vector-icons';

export default function Toolbar(props) {
  return (
    <View>
      <ToolbarAndroid
        style={props.toolBar}
        logo={require('./app_logo.png')}
        title="G.O.M.L."
        titleColor="#000000"
        subtitleColor="#ff0000"
        actions={[
          {
            title: 'Settings',
            // icon: [Entypo, 'dots-three-vertical', 32, '#ffffff'], doesn't work obviously, see appIcons.js
            show: 'always'
          }
        ]}
        onActionSelected={onActionSelected}
      />
      <DotMenu />
    </View>
  );
}
const onActionSelected = position => {};
//require('./icon_settings.png')
const DotMenu = () => (
  <Entypo name="dots-three-vertical" size={32} color="#ffffff" />
);
