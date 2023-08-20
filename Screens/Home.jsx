import { Button, Text, View } from "react-native";

export default function HelloWorld({navigation}) {
    return (
        <View>
            <Text>Hello World!</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button
                title="Update the title"
                onPress={() => navigation.setOptions({ title: 'Updated!' })}
            />
        </View>
    )
}