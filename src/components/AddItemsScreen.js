import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import firebase from '../services/connectionFirebase';



class AddItemsScreen extends Component {

  constructor() {
    super();
    this.dbRef = firebase.firestore().collection('users');
    this.state = {
      name: '',
      email: '',
      tutor: '',
      descricao: '',
      isLoading: false
    };
  }
  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  storeUser() {
    if (this.state.name === '') {
      alert('Fill at least your name!')
    } else {
      this.setState({
        isLoading: true,
      });
      this.dbRef.add({
        name: this.state.name,
        tutor: this.state.tutor,
        email: this.state.email,
        descricao: this.state.descricao,
      }).then((res) => {
        this.setState({
          name: '',
          tutor: '',
          email: '',
          descricao: '',
          isLoading: false,
        });
        this.props.navigation.navigate('ListScreen')
      })
        .catch((err) => {
          console.error("Error found: ", err);
          this.setState({
            isLoading: false,
          });
        });
    }
  }

  render() {

    return (

      <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder={'Name'}
            value={this.state.name}
            onChangeText={(val) => this.inputValueUpdate(val, 'name')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder={'Tutor'}
            value={this.state.tutor}
            onChangeText={(val) => this.inputValueUpdate(val, 'tutor')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            multiline={true}
            numberOfLines={4}
            placeholder={'Email'}
            value={this.state.email}
            onChangeText={(val) => this.inputValueUpdate(val, 'email')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder={'Descrição'}
            value={this.state.descricao}
            onChangeText={(val) => this.inputValueUpdate(val, 'descricao')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Add User'
            onPress={() => this.storeUser()}
            color="#19AC52"
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default AddItemsScreen; 