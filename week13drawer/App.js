import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ButtonExample from './components/Trackers/index.js';

function HomeScreen(props) {
  return (
    <View>
      <Text> <h1><center>HOME</center></h1></Text>
      <Button
        title="Customer Counter"
        onPress={() => props.navigation.navigate('People')}
      />
       <Button
        title="Step Counter"
        onPress={() => props.navigation.navigate('Step')}
      />
    </View>
  );
}

function Exercise1Screen(props) {
  return (
    <View>
      <Text >Customer Counter</Text>
      <ButtonExample />
      <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
      />
       <Button
        title="Step Counter"
        onPress={() => props.navigation.navigate('Step')}
      />
    </View>
  );
}
function Exercise2Screen(props) {
  return (
    <View>
      <Text>Step Counter</Text>
      <ButtonExample />
      <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
      />
       <Button
        title="Customer Counter"
        onPress={() => props.navigation.navigate('People')}
      />
    </View>
  );
}


const Drawer = createDrawerNavigator();

function Home() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="People" component={Exercise1Screen} />
        <Drawer.Screen name="Step" component={Exercise2Screen} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Home;

