// app/_layout.js
import React from "react";
import { Stack } from "expo-router";
import { Pressable, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import {Provider as PaperProvider, DefaultTheme} from "react-native-paper";

export default function Layout() {
  const router = useRouter();

  return (
    <PaperProvider theme={DefaultTheme}>
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#FF69B4" },
        headerTintColor: "#fff", // Cor do texto no cabeçalho (branco)
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "📱 Meus Contatos",
          headerRight: () => (
            <Pressable
              onPress={() => router.push("/settings")} // Navegação para a tela de configurações
              style={styles.gearButton}
            >
              <Text style={styles.gearText}>⚙️</Text>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="settings"
        options={{ title: "⚙️ Configurações" }} // Título para a tela de configurações
      />
    </Stack>
    </PaperProvider>
  );
}

// Estilos aplicados
const styles = StyleSheet.create({
  gearButton: {
    marginRight: 16, // Espaçamento para o ícone de configurações
  },
  gearText: {
    color: "#fff", // Cor do ícone de configurações (branco)
    fontSize: 18, // Tamanho do texto
  },
});