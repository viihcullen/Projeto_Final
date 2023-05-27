import React, { Component } from 'react'; 

import { Button, View, Text } from 'react-native'; 

 
 

class AddItemsScreen extends Component { 

  static navigationOptions = { 

    title: 'Adicionar', 

  }; 

  render() { 

    return ( 

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 

        <Text>Adicionar</Text> 

        <Button 

          title="Mostrar adicionar novamente" 

          onPress={() => this.props.navigation.push('AddBoard')} 

        /> 

        <Button 

          title="Ir para listar" 

          onPress={() => this.props.navigation.navigate('ListScreen')} 

        /> 

        <Button 

          title="Voltar" 

          onPress={() => this.props.navigation.goBack()} 

        /> 

      </View> 

    ); 

  } 

} 

export default AddItemsScreen; 