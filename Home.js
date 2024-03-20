
import { Image, ScrollView, Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import { Icon } from 'react-native-vector-icons/Icon';
import React, { useState } from 'react';
import AppNewJson from './appNew.json';
const HomeScreen = ({ navigation }) => {
  // function handlenavigation(screenName){
  //     navigation.navigate('screenName')
  // }
  const [data, setData] = useState([]);
  const searchUser = async (text) => {
    const url = `./appNew.json?q=${text}`;
    console.warn(url);
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      // setData(result)
    }

  }
  return (
    <View style={{ flex: 1, margin: 30 }}>
      <View style={[styles.employeesection]}>
        <Text style={[styles.heading]}>24 Employees</Text>
        <View style={{ flexDirection: 'row', }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
          >
            <FontAwesome5 name={'bars'} style={styles.mapicon} brand size={25} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeVertical')}
          >
            <FontAwesome5 name={'th'} style={styles.mapicon} brand size={25} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.searchSection}>
          <FontAwesome5 name={'search'} style={styles.searchIcon} brand size={30} color="#000" />
          <TextInput
            style={styles.input}
            placeholder="Search"
            // onChangeText={(searchString) => {this.setState({searchString})}}
            underlineColorAndroid="transparent"
            onChangeText={(text) => searchUser(text)}
          />
        </View>
        {
          data.length ?
            data.map((item) => <View>
              {/* <Text>{item.employee_name}</Text> */}
            </View>) : null
        }
        {AppNewJson.map(item => {
          return <View style={[styles.card, styles.shadowProp]}  >
            <TouchableOpacity
             onPress={() => navigation.navigate('Contact',{id:item.id})}
              // onPress={() => navigation.navigate('HomeVertical')}
            >
              <Image
                source={{ uri: item.image }}
                style={{ width: 80, height: 80, borderRadius: 50 }}
              />
            </TouchableOpacity>

            <View style={{ width: '100%', height: 50, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 100 }}>
              <View>
                <Text style={[styles.heading]}>{item.employee_name} </Text>
                <Text style={[styles.heading]}>{item.employee_salary}</Text>
                <Text style={[styles.heading, styles.gray]}>{item.id}</Text>
              </View>
              <FontAwesome5 name={'whatsapp'} brand size={50} style={{ color: 'green' }} />
            </View>


          </View>
        })}
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 2,
    color: '#000'
  },
  gray: {
    color: '#424242',
    fontWeight: '400'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 35,
    paddingHorizontal: 25,
    // width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
  },
  shadowProp: {
    elevation: 3,
    shadowColor: '#52006A',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#52006A',
  },
  employeesection:{
    flexDirection: 'row',
     justifyContent: 'space-between',
      marginBottom: 20,
      borderColor:'gray',
      borderTopWidth:1,
      borderBottomWidth:1,
      paddingVertical:20,
      paddingLeft:5
  },
  searchIcon: {
    padding: 10,
    paddingHorizontal: 20
  },
  mapicon: {
    marginHorizontal: 20
  },
  input: {
    flex: 1,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',

    fontSize: 20,
    fontWeight: '600',
  },
});