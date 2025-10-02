import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={{ uri: "https://example.com/food-image.jpg" }} // replace with local or API image
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.logo}> App Logo </Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/(tabs)")}>
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.apple]}>
          <Text style={styles.buttonText}>Continue with Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.email]}>
          <Text style={styles.buttonText}>Continue with Email</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          By continuing you agree to our{" "}
          <Text style={{ textDecorationLine: "underline" }}>Privacy Policy</Text> and{" "}
          <Text style={{ textDecorationLine: "underline" }}>Terms of Use</Text>.
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: "cover" },
  overlay: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  logo: { fontSize: 40, fontWeight: "bold", color: "#fff", marginBottom: 50 },
  button: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 8,
    width: "80%",
    alignItems: "center",
  },
  apple: { backgroundColor: "#333" },
  email: { backgroundColor: "#666" },
  buttonText: { color: "#000", fontWeight: "600" },
  footer: { fontSize: 12, color: "#fff", textAlign: "center", marginTop: 40 },
});
