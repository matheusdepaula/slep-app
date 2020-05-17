import * as React from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Container, Body, Text, View } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../atoms/colors';

export default class ProfileNotLogged extends React.Component {
  loginWithFacebook = () => {
    Alert.alert('Login com o Facebook');
  };

  loginWithGoogle = () => {
    Alert.alert('Login com o Google');
  };

  facebookButton = () => (
    <Icon.Button
      name="facebook"
      backgroundColor={COLORS.facebookColor}
      style={{ width: 240 }}
      onPress={this.loginWithFacebook}>
      Conecte-se com o Facebook
    </Icon.Button>
  );

  googleButton = () => (
    <Icon.Button
      name="google"
      backgroundColor={COLORS.googleColor}
      style={{ width: 240 }}
      onPress={this.loginWithGoogle}>
      Conecte-se com o Google
    </Icon.Button>
  );

  render() {
    return (
      <Container>
        <Body style={styles.container}>
          <Text style={styles.title}>
            Para ver e ser visto por outros motoristas, conecte-se com suas redes
            sociais.
          </Text>
          <View style={styles.button}>{this.facebookButton()}</View>
          <View style={styles.button}>{this.googleButton()}</View>
        </Body>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 60,
    paddingHorizontal: 32,
  },
  title: {
    alignSelf: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: '400',
    top: -40,
  },
});
