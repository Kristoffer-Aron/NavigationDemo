import { View, Text, StyleSheet } from "react-native";

export default function TabsHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Tab</Text>
      <Text style={styles.description}>
        This is the Home tab within the Tabs navigation. Notice the tab navigation at the bottom of the screen.
      </Text>
      <Text style={styles.subtitle}>Tab Features:</Text>
      <Text style={styles.feature}>• Multiple screens organized by tabs</Text>
      <Text style={styles.feature}>• Switch between tabs instantly</Text>
      <Text style={styles.feature}>• Each tab maintains its own state</Text>
      <Text style={styles.feature}>• Perfect for organizing related content</Text>
      <Text style={styles.infoText}>
        Switch between the Home, Explore, and Profile tabs using the tab bar at the bottom to see how tab navigation works.
      </Text>
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
  infoText: {
    fontSize: 14,
    marginTop: 20,
    color: "#666",
    lineHeight: 20,
  },
});
