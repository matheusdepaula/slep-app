import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Container, View } from 'native-base';
import COLORS from '../../atoms/colors';

export default class Ranking extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
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
});
