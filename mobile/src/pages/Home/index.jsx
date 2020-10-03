import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Initial = () => {
  return (
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
            longitude: -46.9707956
          }}
        >
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 16,
  },

  map: {
    width: '100%',
    height: '100%',
  },
});

export default Initial;
