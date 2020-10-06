
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    paddingTop: 50,
    backgroundColor: '#09459e',
  },

  pointImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 32,
    borderColor: '#c7c7c7',
    borderWidth: 5
  },

  pointName: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'Roboto_700Bold',
    marginTop: 24,
  },

  address: {
    marginTop: 32,
  },

  addressTitle: {
    color: '#fff',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },

  addressContent: {
    fontFamily: 'Roboto_400Regular',
    lineHeight: 24,
    marginTop: 8,
    color: '#fff',
  },

  footer: {
    marginTop: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#999',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },

  button: {
    marginTop: 30,
    width: '48%',
    backgroundColor: '#34CB79',
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    marginLeft: 8,
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Roboto_500Medium',
  },
});

export default styles;