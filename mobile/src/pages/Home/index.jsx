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
            <Marker
              style={styles.mapMarker}
              coordinate={{
                latitude: -24.2858571, 
                longitude: -46.9707956,
              }}
            >
              <View style={styles.mapMarkerContainer}>
                <Image
                  style={styles.mapMarkerImage}
                  source={{
                    uri: 'https://www.consumoempauta.com.br/site2020/wp-content/uploads/2018/03/enchente.png'
                  }}
                />
                <Text style={styles.mapMarkerTitle}>Enchente</Text>
              </View>
            </Marker>
            <Marker
              style={styles.mapMarker}
              coordinate={{
                latitude: -24.302764,  
                longitude: -47.013051,
              }}
            >
              <View style={styles.mapMarkerContainer}>
                <Image
                  style={styles.mapMarkerImage}
                  source={{
                    uri: 'https://www.girodoboi.com.br/wp-content/uploads/2020/05/virada-do-tempo-chuva-frio-geada-centro-oeste-sudeste-sul-final-de-maio-2020.jpg'
                  }}
                />
                <Text style={styles.mapMarkerTitle}>Chuva Forte</Text>
              </View>
            </Marker>
          </MapView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Points;