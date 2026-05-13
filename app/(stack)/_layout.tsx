import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Stack Home" }} />
      <Stack.Screen name="details" options={{ title: "Details" }} />
      <Stack.Screen name="page1" options={{ title: "Page 1" }} />
      <Stack.Screen name="page2" options={{ title: "Page 2" }} />
    </Stack>
  );
}