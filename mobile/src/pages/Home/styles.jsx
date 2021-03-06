import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#09459e'
  },
  emoji: {
    fontSize: 18 
  },
  header: {
    paddingHorizontal: 32,
  },
  icons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Roboto_700Bold',
    marginTop: 24,
  },

  description: {
    color: '#fff',
    fontSize: 16,
    marginTop: 4,
    fontFamily: 'Roboto_400Regular',
  },

  mapContainer: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    marginTop: 16,
  },

  map: {
    width: '100%',
    height: '100%',
  },
  mapMarker: {
    width: 90,
    height: 80,
  },

  mapMarkerContainer: {
    width: 90,
    height: 80,
    backgroundColor: '#09459e',
    flexDirection: 'column',
    borderRadius: 100,
    overflow: 'hidden',
    alignItems: 'center',
  },

  mapMarkerImage: {
    width: 90,
    height: 45,
    resizeMode: 'cover',
  },

  mapMarkerTitle: {
    flex: 1,
    fontFamily: 'Roboto_400Regular',
    color: '#FFF',
    fontSize: 13,
    lineHeight: 23,
  },
});

export default styles;