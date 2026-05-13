import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.description}>
        This is the Settings page, accessed from the Drawer menu. It uses stack navigation to navigate to sub-settings pages.
      </Text>
      <Text style={styles.subtitle}>Available Settings:</Text>
      
      <Link href="/settings/account" asChild>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingLabel}>Account Settings</Text>
          <Text style={styles.settingArrow}>›</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/settings/privacy" asChild>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingLabel}>Privacy Settings</Text>
          <Text style={styles.settingArrow}>›</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/settings/notifications" asChild>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingLabel}>Notification Settings</Text>
          <Text style={styles.settingArrow}>›</Text>
        </TouchableOpacity>
      </Link>
      
      <Text style={styles.infoText}>
        This demonstrates drawer navigation combined with stack navigation for a complete navigation hierarchy.
      </Text>
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
    marginBottom: 12,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    marginBottom: 8,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: "500",
  },
  settingArrow: {
    fontSize: 24,
    color: "#999",
  },
  infoText: {
    fontSize: 14,
    marginTop: 20,
    color: "#666",
    lineHeight: 20,
  },
});