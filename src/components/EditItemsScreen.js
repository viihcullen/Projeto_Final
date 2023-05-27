import React, { Component } from 'react'; 

import { Button, View, Text } from 'react-native'; 

 

class EditItemsScreen extends Component { 

  static navigationOptions = { 

    title: 'Editar', 

  }; 

  render() { 

    return ( 

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 

        <Text>Editar</Text> 

        <Button 

          title="Ir para a edição novamente" 

          onPress={() => this.props.navigation.push('EditScreen')} 

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

export default EditItemsScreen; 