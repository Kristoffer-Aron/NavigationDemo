import { View, Text, StyleSheet } from "react-native";

export default function NotificationsSettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notification Settings</Text>
      <Text style={styles.description}>
        Configure how you receive notifications. This is the third settings sub-page demonstrating deeper stack navigation.
      </Text>

      <View style={styles.settingGroup}>
        <Text style={styles.groupLabel}>Notification Preferences</Text>
        <View style={styles.settingField}>
          <Text style={styles.fieldLabel}>Push Notifications:</Text>
          <Text style={styles.fieldValue}>Enabled</Text>
        </View>
        <View style={styles.settingField}>
          <Text style={styles.fieldLabel}>Email Notifications:</Text>
          <Text style={styles.fieldValue}>Enabled</Text>
        </View>
        <View style={styles.settingField}>
          <Text style={styles.fieldLabel}>SMS Notifications:</Text>
          <Text style={styles.fieldValue}>Disabled</Text>
        </View>
        <View style={styles.settingField}>
          <Text style={styles.fieldLabel}>Notification Frequency:</Text>
          <Text style={styles.fieldValue}>Daily Digest</Text>
        </View>
        <View style={styles.settingField}>
          <Text style={styles.fieldLabel}>Do Not Disturb Hours:</Text>\n          <Text style={styles.fieldValue}>10:00 PM - 8:00 AM</Text>
        </View>
      </View>

      <Text style={styles.infoText}>
        Return to the Settings page using the back button to manage other preferences.
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
  settingGroup: {
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 8,
    marginVertical: 16,
  },
  groupLabel: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  settingField: {
    marginBottom: 12,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
    marginBottom: 4,
  },
  fieldValue: {
    fontSize: 14,
    color: "#000",
  },
  infoText: {
    fontSize: 14,
    marginTop: 20,
    color: "#666",
    lineHeight: 20,
  },
});
