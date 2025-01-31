import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { defaultStyles } from "../styles/defaultStyles";
import Button from "../components/Button";

type QuoteCardProps = {
  quote: string; 
  author?: string; 
  onFavorite: () => void; 
  isFavorite: boolean; 
};

export const QuoteCard: React.FC<QuoteCardProps> = ({ quote, author, onFavorite, isFavorite }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.quoteText}>“{quote}”</Text>
      {author && <Text style={styles.authorText}>- {author}</Text>}
      <Button
        title={isFavorite ? "Favorited" : "Add to Favorites"}
        onPress={isFavorite ? () => {} : onFavorite} // searched up what a ternary operator is
      />
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

export default QuoteCard;
