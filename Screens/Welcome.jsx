import { Button, Text, View } from "react-native";

export default function WelcomeWorld({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome World!</Text>
            <Button
                title="Go to Home Page!"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

