import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, FlatList, Text, View, TextInput} from "react-native";
import { CardChampion } from "../components/Card";
import { championsData } from "../hooks/ChampionsData";

export const ChampionsFeedScreen = () => {
  const { data, isError, isLoading } = championsData();
  const [searchText, setSearchText] = useState('');

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>Error</Text>;

  const Response = data.data;
  const championValues = Object.values(Response);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Champion List</Text>
      <View style={styles.searchBar}>
        <TextInput style={styles.input} placeholder="Search" onChangeText={(text) => setSearchText(text)}/>
      </View>
      <FlatList
        data={championValues.filter((item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase())
        )}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <CardChampion item={item} />}
        extraData={searchText}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 0,
    backgroundColor: "#0A1428",
  },
  text: {
    fontSize: 20,
    color: '#0A1428',
    marginTop: 60,
    fontWeight: '700'
  },
  input: {
    backgroundColor: '#bfacc8', 
    paddingHorizontal: 10
  },
  searchBar: {
    backgroundColor: '#bfacc8',
    margin: 10,
    padding: 10,
    marginVertical: 10,
    borderRadius: 10
}});

