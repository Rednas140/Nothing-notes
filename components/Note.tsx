import { View, Text } from "react-native";

export function Note({type, title, content}: {type: number} & {title: string} & {content: string}){
    const theme = type;

    return (
        <View>
            <Text>{title ? title : "fuck yeah"}</Text>
            <Text>{ content ? content : "Less gooo"}</Text>
        </View>
    );
}