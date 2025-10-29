import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const LandingPage = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* HERO SECTION */}
      <View style={styles.hero}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
          }}
          style={styles.heroImage}
        />
        <View style={styles.overlay} />
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Cook. Eat. Enjoy.</Text>
          <Text style={styles.heroSubtitle}>
            Discover easy, delicious recipes made from fresh ingredients.
          </Text>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaText}>Explore Recipes</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* FEATURED RECIPES */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Recipes</Text>

        <View style={styles.recipeContainer}>
          {[
            {
              id: 1,
              title: "Creamy Alfredo Pasta",
              description: "Rich, creamy, and cheesy comfort food.",
              image:
                "https://images.unsplash.com/photo-1604908176997-6e4c3db36f19",
            },
            {
              id: 2,
              title: "Garden Fresh Salad",
              description: "Crisp vegetables with a light vinaigrette.",
              image:
                "https://images.unsplash.com/photo-1601050690597-2b6a36b93f0a",
            },
            {
              id: 3,
              title: "Classic Beef Burger",
              description:
                "Juicy grilled burger served with fresh toppings.",
              image:
                "https://images.unsplash.com/photo-1617196039897-3736b5d1c535",
            },
          ].map((recipe) => (
            <View key={recipe.id} style={styles.recipeCard}>
              <Image
                source={{ uri: recipe.image }}
                style={styles.recipeImage}
              />
              <Text style={styles.recipeTitle}>{recipe.title}</Text>
              <Text style={styles.recipeDescription}>
                {recipe.description}
              </Text>
              <TouchableOpacity style={styles.viewButton}>
                <Text style={styles.viewButtonText}>View Recipe</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>

      {/* ABOUT SECTION */}
      <View style={styles.aboutSection}>
        <Text style={styles.aboutTitle}>About TimzyRecipes</Text>
        <Text style={styles.aboutText}>
          TimzyRecipes is your go-to destination for healthy, delicious meals.
          Whether you’re new to cooking or a pro chef, our easy-to-follow
          recipes make cooking fun and rewarding.
        </Text>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2025 TimzyRecipes | Crafted with ❤️ by Food Lovers.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF8F0",
    flex: 1,
  },
  hero: {
    position: "relative",
    height: width * 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  heroContent: {
    position: "absolute",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  heroTitle: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  heroSubtitle: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  ctaButton: {
    backgroundColor: "#FFD54F",
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 25,
  },
  ctaText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "600",
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FF7043",
    marginBottom: 20,
    textAlign: "center",
  },
  recipeContainer: {
    alignItems: "center",
  },
  recipeCard: {
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    width: width * 0.85,
    marginBottom: 20,
    overflow: "hidden",
  },
  recipeImage: {
    width: "100%",
    height: 200,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF7043",
    margin: 10,
  },
  recipeDescription: {
    fontSize: 14,
    color: "#555",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  viewButton: {
    backgroundColor: "#FF7043",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  viewButtonText: {
    color: "white",
    fontWeight: "600",
  },
  aboutSection: {
    backgroundColor: "#FFF3E0",
    padding: 20,
    alignItems: "center",
  },
  aboutTitle: {
    fontSize: 22,
    color: "#FF7043",
    fontWeight: "bold",
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 15,
    textAlign: "center",
    color: "#444",
    maxWidth: 320,
  },
  footer: {
    backgroundColor: "#FF7043",
    padding: 15,
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    color: "white",
    fontSize: 13,
  },
});

export default LandingPage;
