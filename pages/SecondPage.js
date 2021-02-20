import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const SecondPage = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1, padding: 16 }}>
      <View
        style={{
          flex: 1,
          padding: 16,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>You're in the Second Page</Text>
      </View>
    </View>
  </SafeAreaView>
);

export default SecondPage;
