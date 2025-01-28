import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { defaultStyles } from "../styles/defaultStyles";

type QuoteCardProps = {
  quote: string; // Required
  author?: string; // Optional
  onFavorite: () => void; // Required
};

export const QuoteCard: React.FC<QuoteCardProps> = ({ quote, author, onFavorite }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.quoteText}>“{quote}”</Text>
      {author && <Text style={styles.authorText}>- {author}</Text>}
      <TouchableOpacity style={defaultStyles.button} onPress={onFavorite}>
        <Text style={defaultStyles.buttonText}>Add to Favorites</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  quoteText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 8,
  },
  authorText: {
    fontSize: 14,
    color: "#555",
    fontStyle: "italic",
    marginBottom: 8,
  },
});
