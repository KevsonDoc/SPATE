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

import { Fumi } from 'react-native-textinput-effects';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');

import styles from './styles';

const Register = () => {
  const navigation = useNavigation();
  
  function handleNavigationToHome(){
    navigation.navigate('Home');
  }
  return (
    <View
      style={{ flex: 1, backgroundColor: '#09459e', padding: 20, height: height }}
      behavior={ Platform.OS === 'ios' ? 'padding' : undefined }
    >
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
        <Fumi style={styles.input}
          label={'Nome'}
          iconClass={Feather}
          iconName={'user'}
          iconColor={'#11ad99'}
          iconSize={24}
          iconWidth={44}
          inputPadding={16}
        />
        <Fumi style={styles.input}
          label={'Email'}
          iconClass={Feather}
          iconName={'mail'}
          iconColor={'#11ad99'}
          iconSize={24}
          iconWidth={44}
          inputPadding={16}
        />
        <Fumi style={styles.input}
          label={'CPF'}
          iconClass={Feather}
          iconName={'credit-card'}
          iconColor={'#11ad99'}
          iconSize={24}
          iconWidth={44}
          inputPadding={16}
        />
        <Fumi style={styles.input}
          label={'Senha'}
          iconClass={Feather}
          iconName={'lock'}
          iconColor={'#11ad99'}
          iconSize={24}
          iconWidth={44}
          inputPadding={16}
        />
        <RectButton style={styles.button}>
          <View style={styles.buttonIcon}>
            <Feather name="log-in" color="#fff" size={24} />
          </View>
          <Text style={styles.buttonText} onPress={handleNavigationToHome}>Se cadastrar</Text>
        </RectButton>
      </View>
    </View>
  );
};

export default Register;