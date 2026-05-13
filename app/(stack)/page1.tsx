import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Page1Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stack Page 1</Text>
      <Text style={styles.description}>
        You&apos;ve navigated to the first additional page in the stack. Notice how each page is added on top of the previous one.
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardLabel}>Navigation Level:</Text>
        <Text style={styles.cardValue}>Stack Home → Details → Page 1</Text>
      </View>
      <Text style={styles.subtitle}>Features:</Text>
      <Text style={styles.feature}>• Hierarchical navigation</Text>
      <Text style={styles.feature}>• Each screen on top of the previous</Text>
      <Text style={styles.feature}>• Back button removes current screen</Text>
      <Text style={styles.feature}>• Perfect for drill-down navigation</Text>

      <Link href="/(stack)/page2" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Go to Page 2</Text>
        </TouchableOpacity>
      </Link>
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
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
