import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
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

const CreatePoint = () => {
  const navigation = useNavigation();
  
  function handleNavigateBack() {
    navigation.goBack();
  }
  function handleNavigationToFinishRegisterPoint(){
    navigation.navigate('FinishRegisterPoint');
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
      <TouchableOpacity style={styles.icon}>
        <Feather name="arrow-left" color="#11ad99" size={24} onPress={handleNavigateBack}/>
      </TouchableOpacity>
      <View style={styles.main}>
        <View>
          <Text style={styles.title}>
            CADASTRE UM INCIDENTE
          </Text>
          <Text style={styles.description}>
            Cadastre um incidente que está ocorrendo
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Fumi style={styles.input}
          label={'Titulo'}
          iconClass={Feather}
          iconName={'info'}
          iconColor={'#11ad99'}
          iconSize={24}
          iconWidth={44}
          inputPadding={16}
        />
        <Fumi style={styles.input}
          label={'Descrição'}
          iconClass={Feather}
          iconName={'file-text'}
          iconColor={'#11ad99'}
          iconSize={24}
          iconWidth={44}
          inputPadding={16}
        />
        <RectButton style={styles.button}>
          <View style={styles.buttonIcon}>
            <Feather name="arrow-right" color="#fff" size={24} />
          </View>
          <Text style={styles.buttonText} onPress={handleNavigationToFinishRegisterPoint}>Próximo</Text>
        </RectButton>
      </View>
    </View>
  );
};

export default CreatePoint;