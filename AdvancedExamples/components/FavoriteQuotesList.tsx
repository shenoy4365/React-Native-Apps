import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { defaultStyles } from "../styles/defaultStyles";

type FavoriteQuotesListProps = {
  favorites: { quote: string; author?: string }[]; // Required
};

export const FavoriteQuotesList: React.FC<FavoriteQuotesListProps> = ({ favorites }) => {
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.heading}>Favorite Quotes</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.quoteContainer}>
            <Text style={styles.quoteText}>“{item.quote}”</Text>
            {item.author && <Text style={styles.authorText}>- {item.author}</Text>}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  quoteContainer: {
    marginBottom: 12,
  },
  quoteText: {
    fontSize: 16,
    color: "#333",
  },
  authorText: {
    fontSize: 14,
    color: "#555",
    fontStyle: "italic",
  },
});
