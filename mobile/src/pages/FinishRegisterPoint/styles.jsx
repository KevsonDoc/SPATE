import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#09459e',
    paddingHorizontal: 27,
  },
  emoji: {
    fontSize: 18 
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
    // paddingHorizontal: 20,
    borderRadius: 26,
    marginTop: 16,
  },

  map: {
    width: '100%',
    height: '100%',
  },
  button: {
    backgroundColor: '#11ad99',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },
});

export default styles;