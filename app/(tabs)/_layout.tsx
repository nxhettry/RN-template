import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "home" }} />
      <Tabs.Screen name="profile" options={{ title: "profile" }} />
      <Tabs.Screen name="setting" options={{ title: "setting" }} />
    </Tabs>
  );
}
