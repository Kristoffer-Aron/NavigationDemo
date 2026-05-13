import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function StackHomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Stack Navigation Demo</Text>
      <Text style={styles.description}>
        This demonstrates stack-based navigation. You can push screens onto the stack and navigate forward and backward.
      </Text>
      <Text style={styles.subtitle}>How Stack Navigation Works:</Text>
      <Text style={styles.feature}>• Screens are stacked like a deck of cards</Text>
      <Text style={styles.feature}>• New screens appear on top</Text>
      <Text style={styles.feature}>• Back button removes the top screen</Text>
      <Text style={styles.feature}>• Common for detailed view hierarchies</Text>
      
      <Link href="/(stack)/details" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Go to Details Screen</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/(stack)/page1" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Go to Page 1</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/(stack)/page2" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Go to Page 2</Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
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