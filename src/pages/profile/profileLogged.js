import * as React from 'react';
import { Container, Body, Text, Content, ListItem, Left, Button, Right, Switch, Icon, Thumbnail, View } from 'native-base';

export default class ProfileLogged extends React.Component {
  getFirstCell = () => {
    return (
      <ListItem avatar>
        <Left>
          <Thumbnail large source={require('../../assets/avatarMen2.jpg')} />
        </Left>
        <Body>
          <View style={{height: 16}} />
          <Text>Thiago Marting</Text>
          <Text note>Ford Ka</Text>
          <Text note>PNQ-4019</Text>
          <View style={{height: 24}} />
        </Body>
      </ListItem>
    );
  };

  render() {
    return (
      <Container>
        <Content>
          {this.getFirstCell()}
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="bluetooth" />
              </Button>
            </Left>
            <Body>
              <Text>Detalhes do veículo</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="airplane" />
              </Button>
            </Left>
            <Body>
              <Text>Airplane Mode</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>Wi-Fi</Text>
            </Body>
            <Right>
              <Text>GeekyAnts</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="bluetooth" />
              </Button>
            </Left>
            <Body>
              <Text>Bluetooth</Text>
            </Body>
            <Right>
              <Text>On</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
