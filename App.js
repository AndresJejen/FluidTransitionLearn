import React, { Component } from 'react';
import { Text, View, Button, Image, StyleSheet,TouchableHighlight , Animated , Easing} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LogoImage = (props) => (
  <Image source={{uri:'https://picsum.photos/100/100?image=79'}} style={props.style}/>
);
  
class Screen1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Transition appear="horizontal">
          <Text style={styles.paragraph}>
            Bienvenido a Fluid Transitions
          </Text>
        </Transition>

        <Transition shared="logo">
          <LogoImage style={styles.largeLogo}/>
        </Transition>

        <Transition appear="horizontal">
          <TouchableOpacity 
                style ={styles.button}
                onPress={() => this.props.navigation.navigate('screen2')}>
                <Text style={styles.buttontext}>
                    Siguiente
                </Text>
          </TouchableOpacity>
        </Transition>

      </View>
    );
  }
}

class Screen2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Transition shared="logo">
          <LogoImage style={styles.smallLogo}/>
        </Transition>
        
        <Transition appear="horizontal">
          <Text style={styles.paragraph}>
              Este es un ejemplo de Fluid transistions
          </Text>  
        </Transition>

        <Transition appear="horizontal">
          <Text style={styles.paragraph}>
            <Text style={{fontWeight:'normal'}}>
              Este solo es un ejemplo de aprendizaje, funciona bastante bien.
            </Text>
          </Text>  
        </Transition>

        <Transition appear="horizontal">
          <TouchableOpacity 
                style ={styles.button}
                onPress={() => this.props.navigation.goBack()}>
                <Text style={styles.buttontext}>
                    Volver
                </Text> 
          </TouchableOpacity>
        </Transition>
        
      </View>
    );
  }
}

const transitionConfig = {
  duration: 400,
  timing: Animated.timing,
  easing: Easing.easing
};

const Navigator = FluidNavigator({
  screen1: {screen: Screen1},
  screen2: {screen: Screen2}
 },{transitionConfig});

const AppContainer = createAppContainer(Navigator);


export default class App extends Component {
  render() {
    return (
       <AppContainer/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#338AFF',
  },
  largeLogo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  smallLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  paragraph: {
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  button:{
    height: 45,
    width:250,
    borderRadius:10,
    backgroundColor : "lightblue",
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttontext:{
    fontSize: 20,
    textAlign:'center',
    fontWeight:'bold',
  },
});