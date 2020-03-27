import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Count } from '../components/Count';
import { Star } from '../components/Star';
import { getUser } from '../data/firebase';

export default function HomeScreen() {

  const [user, setUser] = useState();
  
  useEffect(() => {
    dataUser();
  }, []);
  
  const dataUser = async () => {
    const dataUser = await getUser();
    setUser(dataUser);
  }
  

  const { rewards: { amount, goal } } = user;

  const renderStars = () => {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        {[...Array(amount)].map(item => <Star key={item} type="black"/>)}
        {[...Array(goal - amount)].map(item => <Star key={item} />)}
      </View>
    )
  }

  const renderQrCode = () => {
    return(
      <View>
        <Text>Você ganhou um premio!! </Text>
        <View>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text> Levantar </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {amount === goal ? renderQrCode() : renderStars()} 
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>Meu progresso</Text>
        <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <Count rewardsAmount={amount} rewardsGoal={goal} />
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    marginVertical: 20
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
