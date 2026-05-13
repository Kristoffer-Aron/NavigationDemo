import { StyleSheet, Text, View } from "react-native";

export default function AccountSettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Settings</Text>
      <Text style={styles.description}>
        This is a sub-page within Settings, accessed through stack navigation. This page is pushed onto the settings stack.
      </Text>
      
      <View style={styles.settingGroup}>
        <Text style={styles.groupLabel}>Account Information</Text>
        <View style={styles.settingField}>
          <Text style={styles.fieldLabel}>Email:</Text>
          <Text style={styles.fieldValue}>user@example.com</Text>
        </View>
        <View style={styles.settingField}>
          <Text style={styles.fieldLabel}>Username:</Text>
          <Text style={styles.fieldValue}>demouser</Text>
        </View>
        <View style={styles.settingField}>
          <Text style={styles.fieldLabel}>Account Status:</Text>
          <Text style={styles.fieldValue}>Active</Text>
        </View>
      </View>
      
      <Text style={styles.infoText}>
        Use the back button in the header to return to the Settings page.
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