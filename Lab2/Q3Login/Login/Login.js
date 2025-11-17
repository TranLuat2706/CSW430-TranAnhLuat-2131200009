import { View, Text, TextInput, ScrollView, TouchableOpacity} from "react-native";
import Style from "./Style";

  const LoginScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Style.container}>
                <Text style={Style.title}>Login</Text>
                <TextInput
                    style={Style.input}
                    placeholder="Phone"
                />
                <TextInput
                    style={Style.input}
                    placeholder="Password"
                    secureTextEntry
                />
                <TouchableOpacity style={Style.button}>
                    <Text style={Style.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default LoginScreen;
