import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps';

import { LinearGradient } from 'expo-linear-gradient';

import { Feather } from '@expo/vector-icons';
import Emoji from 'react-native-emoji';
import styles from './styles';


const Points = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
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
        <View style={styles.header}>
          <View style={styles.icons}>
            <TouchableOpacity>
              <Feather name="arrow-left" color="#11ad99" size={24} onPress={handleNavigateBack}/>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>SPATE - A SUA SEGURANÇA</Text>
          <Text style={styles.description}>
            <Emoji name="rotating_light" style={styles.emoji} />
             Selecione o local que ocorreu o incidente
          </Text>
        </View>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: -24.2858571, 
              longitude: -46.9707956,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
          >
          </MapView>
        </View>
        <RectButton style={styles.button}>
          <View style={styles.buttonIcon}>
            <Feather name="arrow-right" color="#fff" size={24} />
          </View>
          <Text style={styles.buttonText}>Próximo</Text>
        </RectButton>
      </View>
    </SafeAreaView>
  );
};

export default Points;