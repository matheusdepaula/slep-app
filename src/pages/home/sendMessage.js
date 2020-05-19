import * as React from 'react';
import {
  Container,
  Content,
  Item,
  Textarea,
  Button,
  Text,
  View,
} from 'native-base';
import COLORS from '../../atoms/colors';

function SendMessageScreen() {
  const backgroundColor = COLORS.mainColor;
  return (
    <Container>
      <Content>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 16,
            top: 24,
          }}>
          <Item rounded>
            {/* <Input style={{ flex: 1 }} placeholder='Digite sua mensagem'/> */}
            <Textarea
              style={{flex: 1, margin: 8}}
              rowSpan={5}
              placeholder="Digite sua mensagem"
            />
          </Item>
          <Button block style={{margin: 16, backgroundColor}}>
            <Text>Enviar</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
}

export default SendMessageScreen;
