import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ButtonExample from './component/Trackers';

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


const Stack = createStackNavigator();

function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="People" component={FirstExerciseScreen} />
        <Stack.Screen name="Step" component={SecondExerciseScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Home;
