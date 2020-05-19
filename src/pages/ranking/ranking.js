import * as React from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  ListItem,
  Left,
  Body,
  Text,
  List,
  View,
  Thumbnail,
  Content,
} from 'native-base';

export default class Ranking extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  getMock = () => {
    const random = Math.floor(Math.random() * 7) + 1;
    if (random <= 2) {
      return {
        img: require('../../assets/avatarWoman.jpg'),
        name: 'Mariana Souza',
        veiculo: 'Ford KA',
      };
    }
    if (random > 2 && random <= 4) {
      return {
        img: require('../../assets/avatarMen2.jpg'),
        name: 'João Barros',
        veiculo: 'Chevrolet Onix',
      };
    }
    return {
      img: require('../../assets/avatarMen.jpg'),
      name: 'Pedro Vinicius',
      veiculo: 'Renault Sandero',
    };
  };

  getFirstCell = () => {
    const mock = this.getMock();
    return (
      <ListItem avatar>
        <Left>
          <Text> 1     </Text>
          <Thumbnail source={mock.img} />
        </Left>
        <Body>
          <Text>{mock.name}</Text>
          <Text note>{mock.veiculo}</Text>
          <Text note>PNQ-4019</Text>
        </Body>
      </ListItem>
    );
  };

  getCell = () => {
    const mock = this.getMock();
    return (
      <ListItem avatar>
        <Left>
          <Thumbnail source={mock.img} />
        </Left>
        <Body>
          <Text>{mock.name}</Text>
          <Text note>{mock.veiculo}</Text>
          <Text note>JGP-2812</Text>
        </Body>
      </ListItem>
    );
  };

  render() {
    return (
      <Container>
        <Content>
          <List>
            <View style={styles.header}>
              <Text style={styles.title}>
                Este é o Ranking dos usuários que mais colaboraram com outros
                motoristas.
              </Text>
            </View>
            <View style={{borderBottomColor: 'gray', borderBottomWidth: 0.3}} />
            {this.getFirstCell()}
            {this.getCell()}
            {this.getCell()}
            {this.getCell()}
            {this.getCell()}
            {this.getCell()}
            {this.getCell()}
            {this.getCell()}
            {this.getCell()}
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: '400',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: 'yellow',
    right: 0,
  },
  header: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    top: 8,
  },
});
