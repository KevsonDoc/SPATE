import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Dimensions 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');

import styles from './styles';

const Home = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#09459e', padding: 20, height: height }}
      behavior={ Platform.OS === 'ios' ? 'padding' : undefined }
    >
      <LinearGradient
        colors={['rgba(2,11,36)', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 200,
        }}
      />
      <StatusBar 
          barStyle="light-content" 
          backgroundColor="transparent" 
          translucent 
      />
      <View style={styles.main}>
        <View>
          <Text style={styles.title}>
            A SEGURANÇA NA PALMA DA SUA MÃO
          </Text>
          <Text style={styles.description}>
            Ajudamos pessoas a se protegerem de possiveis eventos catastróficos 
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <RectButton style={styles.button}>
          <View style={styles.buttonIcon}>
            <Feather name="arrow-right" color="#fff" size={24} />
          </View>
          <Text style={styles.buttonText}>Logar</Text>
        </RectButton>
        <RectButton style={styles.button}>
          <View style={styles.buttonIcon}>
            <Feather name="arrow-right" color="#fff" size={24} />
          </View>
          <Text style={styles.buttonText}>Entrar sem fazer o Login</Text>
        </RectButton>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Home;