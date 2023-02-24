import React from 'react';
import { ChampionsFeedScreen } from './src/screens/ChampionsFeedScreen';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <ChampionsFeedScreen />
      </NavigationContainer>
    </QueryClientProvider>

  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#5372ac',
    alignItems: 'center',
    justifyContent: 'center',
  },
};


export default App;