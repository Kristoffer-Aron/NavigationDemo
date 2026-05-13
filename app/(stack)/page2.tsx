import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Page2Screen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stack Page 2</Text>
      <Text style={styles.description}>
        This is the deepest level in the stack navigation demonstration. You can navigate back through the stack or pop directly to any previous screen.
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardLabel}>Navigation Level:</Text>
        <Text style={styles.cardValue}>Stack Home → Details → Page 1 → Page 2</Text>
      </View>
      <Text style={styles.subtitle}>Stack Navigation Benefits:</Text>
      <Text style={styles.feature}>• Clear navigation hierarchy</Text>
      <Text style={styles.feature}>• Intuitive back navigation</Text>
      <Text style={styles.feature}>• Can pop to any level</Text>
      <Text style={styles.feature}>• Great for detail screens and wizards</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>← Go Back</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.homeButton]}
        onPress={() => router.push("/(stack)")}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    lineHeight: 24,
  },
  card: {
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 8,
    marginVertical: 16,
  },
  cardLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
    marginBottom: 4,
  },
  cardValue: {
    fontSize: 14,
    color: "#000",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 8,
  },
  feature: {
    fontSize: 14,
    marginLeft: 8,
    marginBottom: 4,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 12,
  },
  homeButton: {
    backgroundColor: "#34C759",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
