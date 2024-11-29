import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        gap: 20,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image style={styles.image} source={require("../assets/images/piggy.png")} />
      <Text
        style={{
          fontFamily: "freckle-face",
          fontSize: 60,
          fontWeight: "bold",
        }}
      >
        GO जी
      </Text>
      <Text
        style={{
          fontFamily: "freckle-face",
          fontSize: 20,
          fontWeight: "semibold",
        }}
      >
        Manage Your Borrowing and Lending
      </Text>
      <TouchableOpacity
        onPress={() => {
          console.log("Login");
        }}
        style={styles.startButton}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  startButton: {
    backgroundColor: "#0000FF",
    padding: 13,
    margin: 15,
    borderRadius: 10,
    width: "50%",
  },
  image: {
    height: "40%",
    width: "100%",
    resizeMode: "contain",
  }
});
