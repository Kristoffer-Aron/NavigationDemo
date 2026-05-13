import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function DetailsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Text style={styles.description}>
        You navigated to this screen using stack navigation. Notice the back arrow in the header - you can use it or the button below to return to the previous screen.
      </Text>
      <View style={styles.detailsCard}>
        <Text style={styles.detailsLabel}>Stack Information:</Text>
        <Text style={styles.detailsInfo}>• This screen is on top of the stack</Text>
        <Text style={styles.detailsInfo}>• You can see the back navigation option</Text>
        <Text style={styles.detailsInfo}>• Press back to pop this screen off the stack</Text>
      </View>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>← Go Back</Text>
      </TouchableOpacity>
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
  detailsCard: {
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 8,
    marginVertical: 16,
  },
  detailsLabel: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  detailsInfo: {
    fontSize: 14,
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