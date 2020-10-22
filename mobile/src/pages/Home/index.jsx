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
import api from '../../services/api';

const Points = () => {
  const navigation = useNavigation();

  function handleNavigateToDetail() {
    navigation.navigate('Detail');
  }

  function hadleNavigateToCreatePoint() {
    navigation.navigate('CreatePoint');
  }

  function handleNavigateBack() {
    navigation.goBack();
  }
  const [points, setPoints] = useState([]);

  useEffect(() => {
    api.get('/point').then((response) => {
      // console.log(response.data);
      setPoints(response.data);
    }).catch(error => console.log(error));
  }, []);
  
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
            <TouchableOpacity>
              <Feather name="plus" color="#11ad99" size={24} onPress={hadleNavigateToCreatePoint}/>
            </TouchableOpacity>
          </View>
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
            {
              points.map((data_point, index) => {
                return (
                  <Marker
                  key={index}
                  onPress={handleNavigateToDetail}
                  style={styles.mapMarker}
                  coordinate={{
                    latitude: data_point.latitude, 
                    longitude: data_point.longitude,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                  }}
                >
                  <View style={styles.mapMarkerContainer}>
                    <Image
                      style={styles.mapMarkerImage}
                      source={{
                        uri: 'https://www.consumoempauta.com.br/site2020/wp-content/uploads/2018/03/enchente.png'
                      }}
                    />
                    <Text style={styles.mapMarkerTitle}>title</Text>
                  </View>
                </Marker>
                )
              })
            }
          </MapView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Points;