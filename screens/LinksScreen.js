import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { updateStars, getUser } from '../data/firebase';
import { UserContext } from '../data/userContext';

export default function LinksScreen() {
  const dataUser = useContext(UserContext);
  const { rewards: { amount }} = dataUser;
  const [star, setStar] = useState();
  
  const menagerStar = async() => {
    const newAmount = Number(amount) + Number(star);
    dataUser.rewards.amount = newAmount;
    updateStars(dataUser);
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          keyboardType = 'numeric'
          placeholder="Adiconar pontos"
          onChangeText={text => setStar(text)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={() => {menagerStar()}}>
          <Text style={styles.loginText}>Adicionar estrela</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
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
  inputText:{
    height:50,
    color:"white"
  },
  inputView:{
    width:"80%",
    backgroundColor:"#696969",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  }
});
