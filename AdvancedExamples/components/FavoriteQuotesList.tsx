import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { defaultStyles } from "../styles/defaultStyles";

type FavoriteQuotesListProps = {
  favorites: { quote: string; author?: string }[];
};

export const FavoriteQuotesList: React.FC<FavoriteQuotesListProps> = ({ favorites }) => {
  const [favoritesCount, setFavoritesCount] = useState(favorites.length);
  const [isLoading, setIsLoading] = useState(true); // state variable

  useEffect(() => {
    setFavoritesCount(favorites.length);
    setIsLoading(false); // set loading to false after the data is loaded
  }, [favorites]);

  return (
    // used stack overflow and chatGPT for the general idea here
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.heading}>Favorite Quotes ({favoritesCount})</Text>
      {isLoading ? ( // Display loading state until the data is ready
        <Text>Loading...</Text>
      ) : (
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
      )}
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

export default FavoriteQuotesList;
