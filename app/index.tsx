import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Navigation Demo</Text>
      <Text style={styles.description}>
        Welcome to the Expo Router Navigation Demo. This app demonstrates three different navigation patterns commonly used in mobile applications.
      </Text>

      <Text style={styles.subtitle}>Navigation Types:</Text>
      
      <View style={styles.navigationCard}>
        <Text style={styles.navTitle}>📋 Drawer Navigation</Text>
        <Text style={styles.navDescription}>
          Access the drawer menu by tapping the hamburger icon (☰) in the top left corner. Drawer navigation is ideal for main menu options and providing access to different sections of your app.
        </Text>
      </View>

      <View style={styles.navigationCard}>
        <Text style={styles.navTitle}>📑 Tab Navigation</Text>
        <Text style={styles.navDescription}>
          Switch between multiple screens using tab buttons at the bottom. Tabs are perfect for organizing related content and providing quick access to different sections while maintaining state.
        </Text>
      </View>

      <View style={styles.navigationCard}>
        <Text style={styles.navTitle}>📚 Stack Navigation</Text>
        <Text style={styles.navDescription}>
          Navigate through a series of screens in a hierarchical manner. Stack navigation allows you to push new screens and navigate back, perfect for detail views and drill-down navigation.
        </Text>
      </View>

      <Text style={styles.subtitle}>Quick Links:</Text>
      
      <Link href="/(tabs)" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>📑 Go to Tabs Demo</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/(stack)" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>📚 Go to Stack Demo</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/settings" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>⚙️ Go to Settings</Text>
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
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
    color: "#333",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 12,
  },
  navigationCard: {
    backgroundColor: "#f5f5f5",
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
  },
  navTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  navDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: "#666",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});