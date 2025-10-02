import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { supabase } from "../../lib/superbase";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchRecipes();
  }, []);

  async function fetchRecipes() {
    const { data, error } = await supabase
      .from("recipes")
      .select("id, title, category, image_url");

    if (error) console.error(error);
    else setRecipes(data);
  }

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="settings-outline" size={24} color="#333" />
        <View>
          <Text style={styles.title}>Food Recipes</Text>
          <Text style={styles.subtitle}>Discover the best recipes worldwide.</Text>
        </View>
      </View>

      {/* Featured Recipe */}
      {recipes.length > 0 && (
        <Image source={{ uri: recipes[0].image_url }} style={styles.featuredImage} />
      )}

      {/* Search */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#333" style={{ marginHorizontal: 8 }} />
        <TextInput
          placeholder="Search recipes"
          style={styles.searchInput}
          value={query}
          onChangeText={setQuery}
        />
      </View>

      {/* Recipe List */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recipes</Text>
        <Text style={styles.sectionSubtitle}>Browse from Supabase</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
          {filteredRecipes.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              onPress={() => router.push({ pathname: "/recipedetails", params: { id: item.id } })}
            >
              <Image source={{ uri: item.image_url }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: { marginBottom: 16 },
  title: { fontSize: 24, fontWeight: "bold", color: "#222" },
  subtitle: { fontSize: 14, color: "#666" },
  featuredImage: { width: "100%", height: 180, borderRadius: 12, marginVertical: 16 },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 25,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  searchInput: { flex: 1, paddingVertical: 8 },
  section: { marginTop: 20 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#222" },
  sectionSubtitle: { fontSize: 12, color: "#666" },
  card: { marginRight: 12, width: 140 },
  cardImage: { width: "100%", height: 100, borderRadius: 10 },
  cardTitle: { fontSize: 14, marginTop: 6, fontWeight: "600", textAlign: "center" },
});
