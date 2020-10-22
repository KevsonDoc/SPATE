import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking
} from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';

const Detail = () => {
  const navigation = useNavigation();
  
  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleWhatsapp() {
    Linking.openURL(
      'whatsapp://send?text=Está acontecendo um enchente agora mesmo!'
    );
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <LinearGradient
          colors={['rgba(0,0,0,0.7)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 200,
          }}
        />
        <TouchableOpacity onPress={handleNavigateBack}>
          <Feather name="arrow-left" color="#11ad99" size={24} />
        </TouchableOpacity>

        <Image
          style={styles.pointImage}
          source={{
            uri: 'https://www.consumoempauta.com.br/site2020/wp-content/uploads/2018/03/enchente.png',
          }}
        />
        <Text style={styles.pointName}>Enchente</Text>
        <View style={styles.address}>
          <Text style={styles.addressTitle}>Endereço:</Text>
          <Text style={styles.addressContent}>
            Peruíbe - SP
          </Text>
        </View>
        <View style={styles.footer}>
          <RectButton style={styles.button} onPress={handleWhatsapp}>
            <FontAwesome name="whatsapp" size={20} color="#fff" />
            <Text style={styles.buttonText}>Whatsapp</Text>
          </RectButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Detail;