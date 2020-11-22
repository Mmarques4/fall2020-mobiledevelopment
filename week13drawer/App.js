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

function FirstExerciseScreen(props) {
  return (
    <View>
      <Text><h2>Customer Counter</h2></Text>
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
function SecondExerciseScreen(props) {
  return (
    <View>
      <Text> <h2>Step Counter</h2></Text>
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
        <Drawer.Screen name="People" component={FirstExerciseScreen} />
        <Drawer.Screen name="Step" component={SecondExerciseScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Home;

