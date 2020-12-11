import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ButtonExample from './component/Pizza';
import ButtonExample2 from './component/Wings';
import ButtonExample3 from './component/Calzone';
import ButtonExample4 from './component/Fries';
import ButtonExample5 from './component/Beverage';
import ButtonExample6 from './component/Salads';

function HomeScreen(props) {
  return (
    <View>
      <Text> <h1><center> Welcome to Maggie's Pizza</center></h1></Text>
      <Button
        title="Pizza"
        onPress={() => props.navigation.navigate('Pizza')}
      />
       <Button
        title="Wings"
        onPress={() => props.navigation.navigate('Wings')}
      />
      <Button
      title="Calzone"
      onPress={() => props.navigation.navigate('Calzones')}
    />
    <Button
      title="Salads"
      onPress={() => props.navigation.navigate('Salads')}
    />
    <Button
      title="Fries"
      onPress={() => props.navigation.navigate('Fries')}
    />
    <Button
      title="Beverages"
      onPress={() => props.navigation.navigate('Beverage')}
    />
    </View>
    
  );
}

function PizzaScreen(props) {
  return (
    <View>
      <Text><h2>Cuztomize your Pizza</h2></Text>
      <ButtonExample />
      <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
}
function WingScreen(props) {
  return (
    <View>
      <Text> <h2>Cuztomize your Wings</h2></Text>
      <ButtonExample2/>
      <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
}

function CalzoneScreen(props) {
  return (
    <View>
      <Text> <h2>Cuztomize your Calzones</h2></Text>
      <ButtonExample3 />
      <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
}

function PotatoScreen(props) {
  return (
    <View>
      <Text> <h2>Cuztomize your Fries</h2></Text>
      <ButtonExample4 />
      <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
}

function BeverageScreen(props) {
  return (
    <View>
      <Text> <h2>Select your Beverage. </h2></Text>
      <ButtonExample5 />
      <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
}

function SaladScreen(props) {
  return (
    <View>
      <Text> <h2>Select your favorite Salad! </h2></Text>
      <ButtonExample6 />
      <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
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
        <Stack.Screen name="Pizza" component={PizzaScreen} />
        <Stack.Screen name="Wings" component={WingScreen} />
        <Stack.Screen name="Calzones" component={CalzoneScreen} />
        <Stack.Screen name="Fries" component={PotatoScreen} />
        <Stack.Screen name="Beverage" component={BeverageScreen} />
        <Stack.Screen name="Salads" component={SaladScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Home;
