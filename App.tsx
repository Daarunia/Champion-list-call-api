import React from 'react';
import { View } from "react-native";
import { ChampionsFeedScreen } from './src/screens/ChampionsFeedScreen';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();

const App = () => {
  return (
    <View style={styles.container}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <ChampionsFeedScreen />
        </NavigationContainer>
      </QueryClientProvider>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: '#0A1428',
    height: '100%',
  },
};


export default App;