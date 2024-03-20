import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useRoute } from '@react-navigation/native';
import AppNewJson from './appNew.json';

function ContactDetails({ navigation }) {
  const route = useRoute();
  const id = route.params?.id;


    return (
        <><View style={{ flex: 1, alignItems: 'center', marginVertical: 20,  }}>
        <View>
          <Image
            source={{ uri: 'https://cosimo-art-dev.s3.ap-south-1.amazonaws.com/public/uploads/artworks/webp/N2O9CuWtmeoQ4sI9DYFa42Z1zkKsb8WHA5QnG8HM.webp' }}
            style={{ width: 200, height: 200, borderRadius: 100, marginBottom: 20 }} />
          <Text style={[styles.heading]}>Name Employee</Text>
          <Text style={[styles.heading, styles.gray]}>128</Text>
          <Text style={[styles.heading, styles.gray]}>{id}</Text>

        </View>
        <View style={[styles.icon_section]}>
          <View>
          <FontAwesome5 name={'rocketchat'} brand size={50} style={{ color: 'blue' }} />
          <Text style={[styles.heading_icon, ]}>Chat</Text>
          </View>
          <View>
          <FontAwesome5 name={'envelope'} brand size={50} style={{ color: 'blue' }} />
          <Text style={[styles.heading_icon, ]}>Email</Text>
          </View>
          <View>
          <FontAwesome5 name={'whatsapp'} brand size={50} style={{ color: 'blue' }} />
          <Text style={[styles.heading_icon, ]}>Call</Text>
          </View>
          <View>
          <FontAwesome5 name={'user-plus'} brand size={50} style={{ color: 'blue' }} />
          <Text style={[styles.heading_icon, ]}>Add</Text>
          </View>
         
          
        </View>
      </View></>
      );
}

export default ContactDetails;
const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 2,
    color: '#000',
    textAlign:'center'
  },
  gray: {
    fontSize: 25,
    color: '#424242',
    fontWeight:'400'
  },
  icon_section: {
    flexDirection: 'row', 
    paddingHorizontal: 10,
    justifyContent:'space-evenly',
     width:'100%',
     marginVertical: 20,
  }, 
  heading_icon:{
    fontSize: 20,
    fontWeight: '600',
    marginTop: 3,
   color:'blue',
    textAlign:'center'
  }
})