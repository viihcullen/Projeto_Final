import React, { Component } from 'react';
import { Text } from 'react-native';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { ListItem } from '@react-native-material/core'
import firebase from '../services/connectionFirebase';



class ListScreen extends Component {

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('users');
    this.state = {
      isLoading: true,
      userArr: []
    };
  }
  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  getCollection = (querySnapshot) => {
    const userArr = [];
    querySnapshot.forEach((res) => {
      const { name, tutor, email, descricao } = res.data();
      userArr.push({
        key: res.id,
        res,
        name,
        tutor,
        email,
        descricao,
      });
    });
    this.setState({
      userArr,
      isLoading: false,
    });
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      )
    } else {
      return (
        <ScrollView style={styles.container}>
          {
            this.state.userArr.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  title={item.name}
                  secondaryText={item.tutor}
                  onPress={() => {
                    this.props.navigation.navigate('DetailScreen', {
                      userkey: item.key
                    });
                  }} />
              );
            })

          }
        </ScrollView>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 22,
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
export default ListScreen; 