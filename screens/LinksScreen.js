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
          placeholderTextColor="#402E1A"
          onChangeText={text => setStar(text)}
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => {menagerStar()}}>
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
    paddingHorizontal: 20
  },
  optionIconContainer: {
    marginRight: 12,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  btn:{
    width: "100%",
    backgroundColor: "#8CC03A",
    borderRadius: 4,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10
  },
  inputText:{
    height: 50,
    color: "#402E1A",
  },
  inputView:{
    width: "100%",
    backgroundColor: "#F4F2F5",
    borderRadius: 4,
    height: 50,
    justifyContent: "center",
    padding: 20
  }
});
