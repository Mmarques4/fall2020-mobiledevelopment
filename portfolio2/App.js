import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
    <View style={{backgroundColor: '#E2E3FB', flex:1}}>
      <Text style={styles.headerText1}> Welcome to Maggie's Pizza</Text>
      <View style={styles.buttonContainer}>
        <Button
        buttonStyle={styles.button}
          title="Pizza"
          onPress={() => props.navigation.navigate('Pizza')}
        />  &nbsp;&nbsp;&nbsp;
        <Button
         buttonStyle={styles.button}
          title="Wings"
          onPress={() => props.navigation.navigate('Wings')}
        /> &nbsp;&nbsp;&nbsp;
        <Button
         buttonStyle={styles.button}
        title="Calzone"
        onPress={() => props.navigation.navigate('Calzones')}
      /> &nbsp;&nbsp;&nbsp;
      <Button
       buttonStyle={styles.button}
        title="Salads"
        onPress={() => props.navigation.navigate('Salads')}
      /> &nbsp;&nbsp;&nbsp;
      <Button
       buttonStyle={styles.button}
        title="Fries"
        onPress={() => props.navigation.navigate('Fries')}
      /> &nbsp;&nbsp;&nbsp;
      <Button
       buttonStyle={styles.button}
        title="Beverages"
        onPress={() => props.navigation.navigate('Beverage')}
      />
      </View>
    </View>
    
  );
}

function PizzaScreen(props) {
  return (
    <View style={{backgroundColor: '#E2E3FB', flex:1}}>
    <Text style={styles.headerText}>Customize your Pizza</Text>
      <ButtonExample/>
      <Button
        buttonStyle={styles.button}
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
        
      />
    </View>
  );
}
function WingScreen(props) {
  return (
    <View style={{backgroundColor: '#E2E3FB', flex:1}}>
      <Text style={styles.headerText}>Customize your Wings</Text>
      <ButtonExample2/>
      <Button
        buttonStyle={styles.button}
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
        style={styles.buttonStyle}
      />
    </View>
  );
}

function CalzoneScreen(props) {
  return (
    <View style={{backgroundColor: '#E2E3FB', flex:1}}>
      <Text style={styles.headerText}>Customize your Calzones</Text>
      <ButtonExample3 />
      <Button
       buttonStyle={styles.button}
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
        style={styles.buttonStyle}
      />
    </View>
  );
}

function PotatoScreen(props) {
  return (
    <View style={{backgroundColor: '#E2E3FB', flex:1}}>
      <Text style={styles.headerText}>Customize your Fries</Text>
      <ButtonExample4 />
      <Button
       buttonStyle={styles.button}
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
        style={styles.buttonStyle}
      />
    </View>
  );
}

function BeverageScreen(props) {
  return (
    <View style={{backgroundColor: '#E2E3FB', flex:1}}>
      <Text style={styles.headerText}>Select your Beverage.</Text>
      <ButtonExample5 />
      <Button
       buttonStyle={styles.button}
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
        style={styles.buttonStyle}
      />
    </View>
  );
}

function SaladScreen(props) {
  return (
    <View style={{backgroundColor: '#E2E3FB', flex:1}}>
      <Text style={styles.headerText}>Select your favorite Salad! </Text>
      <ButtonExample6 />
      <Button
        buttonStyle={styles.button}
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
        style={styles.buttonStyle}
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

const styles = StyleSheet.create({
  
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: 'cambria',
  },
  headerText1: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    color: 'black',
    fontFamily: 'cambria',
  },

  buttonContainer: {
    backgroundColor: '#E2E3FB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: 'black',
    borderColor: '#A950FC',
    borderWidth: 4,
    width: 100,
    height: 80, 
 },
});