import { Drawer } from 'expo-router/drawer';

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ title: "Home" }} />
      <Drawer.Screen name="(tabs)" options={{ title: "Tabs Demo" }} />
      <Drawer.Screen name="(stack)" options={{ title: "Stack Demo" }} />
      <Drawer.Screen name="settings" options={{ title: "Settings" }} />
    </Drawer>
  );
}