import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Text,Button } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';



class ListScreen extends Component {

  static navigationOptions = {

    title: 'Listar',

  };

  render() {

    return (

      <View style={styles.container}>

        <Text>Listar</Text>

        <View style={styles.botao}>
          <Button

            title="Detalhes"
            color="#8C60C6"
            onPress={() => this.props.navigation.navigate('DetailScreen')}

          />

          <Button

            title="Adicionar"
            color="#8C60C6"
            onPress={() => this.props.navigation.navigate('AddItemsScreen')}

          />

          <Button

            title="Editar"
            color="#8C60C6"
            onPress={() => this.props.navigation.navigate('EditItemsScreen')}

          />
        </View>


      </View>

    );

  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  botao:{
    width: 'auto',
  
  }



});
export default ListScreen; 