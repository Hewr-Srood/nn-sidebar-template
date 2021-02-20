import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const FirstPage = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>You're in the First Page</Text>
    </View>
  </SafeAreaView>
);
export default FirstPage;
