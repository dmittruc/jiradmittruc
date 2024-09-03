import { SafeAreaView, Text, View } from "react-native"
import styles from "./styles"

const Header = () => {
    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <View style={styles.container}>
                <Text>Header</Text>
            </View>
        </SafeAreaView>
    )
}

export default Header