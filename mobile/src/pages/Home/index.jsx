import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';

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
        <View style={styles.header}>
          <TouchableOpacity>
            <Feather name="arrow-left" color="#11ad99" size={24} onPress={handleNavigateBack}/>
          </TouchableOpacity>
          <Text style={styles.title}>SPATE - A SUA SEGURANÇA</Text>
          <Text style={styles.description}>
            <Emoji name="rotating_light" style={styles.emoji} />
             Verifique no mapa um ponto de denúncia de incidentes
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
      </View>
    </SafeAreaView>
  );
};

export default Points;