import * as React from 'react';
import { View, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Enviar mensagem"
        onPress={() => navigation.navigate('SendMessage')}
      />
    </View>
  );
}

export default HomeScreen;
