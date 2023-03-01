import { Card, Text } from "react-native-paper";
import { ViewStyle, TextStyle, StyleSheet, View } from "react-native";
interface Props {
  item: {
    id: string;
    name: string;
    title: string;
    blurb: string;
    info: string[];
    tags: string[];
  };
}

export const CardChampion = ({ item }: Props) => {

  const championPicture = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/` + item.id + `_0.jpg`;

  return (
    <Card style={styles.container}>
      <Card.Title title={item.name} titleStyle={{color: '#c8c6d7', fontWeight: 'bold'}} subtitle={item.title} subtitleStyle={{color: '#c8c6d7'}}/>
      <Card.Cover
        source={{
          uri: championPicture,
        }}
      />
      <Card.Content>
        <View style={styles.tagPart}>
          <Text style={styles.tagTitle}>Tags:</Text>
          {item.tags.map((tag) => (
          <View style={styles.tagsContainer}>
              <View key={tag} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
          </View>
          ))}
        </View>
        <View>
            <Text style={styles.blurb}>{item.blurb}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#bfacc8",
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    overflow: "hidden",
  } as ViewStyle,
  tagsContainer: {
    margin: 10,
    marginLeft: 0,
    flexWrap: "wrap",
    display: "flex",
    flexDirection: "row",
  } as ViewStyle,
  tag: {
    backgroundColor: "#c8c6d7",
    borderRadius: 10,
    padding: 5,
    marginBottom: 5,
  } as TextStyle,
  tagText: {
    color: "#c8c6d7",
    fontSize: 12,
  } as TextStyle,
  tagTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    color: "#c8c6d7",
  } as TextStyle,
  blurb: {
    color: "#c8c6d7",
  } as TextStyle,
  tagPart: {
    flexDirection: "row",
    width: "100%",
    display: "flex",
  } as ViewStyle,
});
