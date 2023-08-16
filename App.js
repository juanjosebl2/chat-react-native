import { StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react'
import Chat from './src/components/Chat';

export default function App() {
  const [isChatVisible, setIsChatVisible] = useState(false);

  return (
    <>
      {isChatVisible && (
        <Chat/>
      )}
      {!isChatVisible && (
        <View style={styles.container}>
          <Button
            title="Abrir chat"
            onPress={() => setIsChatVisible(true)}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
