import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Container, View, Button, Text, Item, Input} from 'native-base';
import COLORS from '../../atoms/colors';

export default class HomeScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false,
    };
  }

  onChangeText = (text) => {
    if (text.length === 7) {
      this.setState({
        showButton: true,
      });
    } else {
      this.setState({
        showButton: false,
      });
    }
  };

  renderButton = () => {
    if (this.state.showButton) {
      const backgroundColor = COLORS.mainColor;
      return (
        <Button
          primary
          style={{backgroundColor}}
          onPress={() => this.props.navigation.navigate('SendMessage')}>
          <Text> Enviar mensagem </Text>
        </Button>
      );
    }
    return null;
  };

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Item rounded style={styles.input}>
            <Input
              ref={(ref) => {
                this.input = ref;
              }}
              placeholder="Digite a placa"
              style={{textAlign: 'center'}}
              maxLength={7}
              onChangeText={(text) => this.onChangeText(text)}
            />
          </Item>
          {this.renderButton()}
        </View>
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
  input: {
    width: 290,
    marginVertical: 24,
  },
});
