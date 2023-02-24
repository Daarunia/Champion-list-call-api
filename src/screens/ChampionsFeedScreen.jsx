import React from "react";
import { SafeAreaView, StyleSheet, FlatList, Text } from "react-native";
import { CardChampion } from "../components/Card";
import { championsData } from "../hooks/championsData";

export const ChampionsFeedScreen = () => {
  const { data, isError, isLoading } = championsData();
  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>Error</Text>;

  const Response= data.data;
  const championValues = Object.values(Response);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={championValues}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <CardChampion item={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 0,
    backgroundColor: "#0A1428",
  } 
});

