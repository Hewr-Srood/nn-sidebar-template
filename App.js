import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomSidebarMenu from './CustomSidebarMenu';
import { FirstScreenStack, SecondScreenStack } from './Stacks/Stacks';

const { Navigator, Screen } = createDrawerNavigator();
const screens = [
  {
    name: 'FirstPage',
    label: 'First Page Option',
    component: FirstScreenStack,
  },
  {
    name: 'SecondPage',
    label: 'Second Page Option',
    component: SecondScreenStack,
  },
];
export default () => (
  <NavigationContainer>
    <Navigator
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 5 },
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}>
      {screens.map(({ name, label, component }) => (
        <Screen
          key={`${name}-${label}`}
          name={name}
          options={{ drawerLabel: label }}
          component={component}
        />
      ))}
    </Navigator>
  </NavigationContainer>
);
