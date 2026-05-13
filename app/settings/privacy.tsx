import { View, Text, StyleSheet } from "react-native";

export default function PrivacySettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Privacy Settings</Text>
      <Text style={styles.description}>
        Manage your privacy preferences. This is another settings sub-page accessed through stack navigation.
      </Text>

      <View style={styles.settingGroup}>
        <Text style={styles.groupLabel}>Privacy Options</Text>
        <View style={styles.settingField}>
          <Text style={styles.fieldLabel}>Profile Visibility:</Text>
          <Text style={styles.fieldValue}>Public</Text>
        </View>
        <View style={styles.settingField}>
          <Text style={styles.fieldLabel}>Activity Status:</Text>
          <Text style={styles.fieldValue}>Visible to Friends</Text>
        </View>
        <View style={styles.settingField}>
          <Text style={styles.fieldLabel}>Location Sharing:</Text>
          <Text style={styles.fieldValue}>Disabled</Text>
        </View>
        <View style={styles.settingField}>
          <Text style={styles.fieldLabel}>Analytics:</Text>
          <Text style={styles.fieldValue}>Enabled</Text>
        </View>
      </View>

      <Text style={styles.infoText}>
        Use the back button to return to the Settings page and explore other options.
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
