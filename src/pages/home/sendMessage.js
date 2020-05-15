import * as React from 'react';
import { Container, Content, Input, Item, Textarea, Button, Text } from 'native-base';

function SendMessageScreen() {
  return (
    <Container>
      <Content>
        <Item
          rounded
          style={{
            margin: 16,
          }}>
          {/* <Input style={{ flex: 1 }} placeholder='Digite sua mensagem'/> */}
          <Textarea
            style={{flex: 1}}
            rowSpan={5}
            placeholder="Digite sua mensagem"
          />
        </Item>
        <Button block style={{ margin: 16 }}>
          <Text>Enviar</Text>
        </Button>
      </Content>
    </Container>
  );
}

export default SendMessageScreen;
