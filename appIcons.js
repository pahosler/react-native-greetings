import { Entypo } from '@expo/vector-icons';
const icons = {
  settings: [Entypo, 'dots-three-vertical', 32, '#FFFFFF'],
  plus: [Entypo, 'plus', 32, '#FFFFFF'],
  camera: [Entypo, 'camera', 32, '#FFFFFF']
};

let IconsMap = {};
let IconsLoaded = new Promise((resolve, reject) => {
  new Promise.all(
    Object.keys(icons).map(iconName =>
      // getImageSource throws an unhandled promise warning
      icons[iconName][0].getImageSource(
        icons[iconName][1],
        icons[iconName][2],
        icons[iconName][3]
      )
    )
  ).then(sources => {
    Object.keys(icons).forEach(
      (iconName, idx) => (IconsMap[iconName] = sources[idx])
    );
    resolve(true);
  });
});

export { IconsMap, IconsLoaded };

/*
this code is from https://github.com/wix/react-native-navigation/issues/43
near the bottom of the thread. This may work I just haven't figured out how to
implement properly yet.
*/
