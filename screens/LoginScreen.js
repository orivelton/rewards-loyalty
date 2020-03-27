import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import FirebaseConfig from '../constants/FirebaseConfig';
// Initialize Firebase
!firebase.apps.length && firebase.initializeApp(FirebaseConfig);

export default function LoginScreen() {
     const [email, setEmail] = useState();
     const [password, setpassword] = useState();

    const login = () => {
        try {
            firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
                console.log(user);
            });
        } catch(error) {
            console.error(error);
        }
    }

    return (
        <View style={styles.container}>
        <Text style={styles.logo}>Rewards Loyalty</Text>
        <View style={styles.inputView} >
            <TextInput  
            style={styles.inputText}
            keyboardType='numeric'
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setEmail(text)}/>
        </View>
        <View style={styles.inputView} >
            <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setpassword(text)}/>
        </View>
        <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={login}>
            <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});