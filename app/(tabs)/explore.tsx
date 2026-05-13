import { View, Text, StyleSheet } from "react-native";

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Tab</Text>
      <Text style={styles.description}>
        This is the Explore tab. This demonstrates tab-based navigation where you can switch between multiple screens using tab buttons at the bottom.
      </Text>
      <Text style={styles.subtitle}>Features:</Text>
      <Text style={styles.feature}>• Quick access to different sections</Text>
      <Text style={styles.feature}>• Persistent state between tabs</Text>
      <Text style={styles.feature}>• Bottom tab navigation bar</Text>
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
});