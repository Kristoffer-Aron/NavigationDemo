import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Tab</Text>
      <Text style={styles.description}>
        This is the Profile tab. Along with the Explore tab, this demonstrates tab-based navigation with multiple screen options.
      </Text>
      <View style={styles.profileCard}>
        <Text style={styles.profileLabel}>User Profile</Text>
        <Text style={styles.profileInfo}>Name: Demo User</Text>
        <Text style={styles.profileInfo}>Status: Active</Text>
      </View>
      <Text style={styles.subtitle}>Tab Navigation Benefits:</Text>
      <Text style={styles.feature}>• Navigate between sections instantly</Text>
      <Text style={styles.feature}>• Each tab maintains its own state</Text>
      <Text style={styles.feature}>• Common in mobile apps (iOS and Android)</Text>
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
  profileCard: {
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 8,
    marginVertical: 16,
  },
  profileLabel: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  profileInfo: {
    fontSize: 14,
    marginBottom: 4,
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