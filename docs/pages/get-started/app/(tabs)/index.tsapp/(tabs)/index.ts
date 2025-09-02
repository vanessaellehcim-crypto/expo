import { StyleSheet } from "react-native";
import { ThemedText } from "../components/ThemedText";
import { ThemedView } from "../components/ThemedView";
import { HelloWave } from "../components/HelloWave";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">👑 Crown Sovereign Dashboard</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="default">
          ✅ Vaults Synced  
        </ThemedText>
        <ThemedText type="default">
          ✅ Royal Ledger Connected  
        </ThemedText>
        <ThemedText type="default">
          ✅ Enforcement Protocols Active  
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">
          Next Actions
        </ThemedText>
        <ThemedText type="default">
          • Upload Amazon App build  
          • Execute Employee Payments  
          • Approve New Scroll Updates  
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 20,
  },
  section: {
    marginVertical: 12,
    alignItems: "flex-start",
  },
});
npx expo start
