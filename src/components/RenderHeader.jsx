import { View, TextInput } from "react-native";
//import { searchFilterFunction } from "../hooks/ChampionsData";

export const RenderHeader = () => {
    return (
        <View
            style={{
                backgroundColor: '#bfacc8',
                margin: 10,
                padding: 10,
                marginVertical: 10,
                borderRadius: 10
            }}>
            <TextInput
                placeholder="Search"
                style={{ backgroundColor: '#bfacc8', paddingHorizontal: 10 }}
            />
        </View>
    );
}