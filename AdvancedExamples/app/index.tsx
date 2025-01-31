import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { defaultStyles } from "../styles/defaultStyles";
import { QuoteCard } from "../components/QuoteCard";
import { FavoriteQuotesList } from "../components/FavoriteQuotesList";
import colors from "@/styles/colors";

const App = () => {
  const [quote, setQuote] = useState("The only limit to our realization of tomorrow is our doubts of today.");
  const [author, setAuthor] = useState("Franklin D. Roosevelt");
  const [favorites, setFavorites] = useState<{ quote: string; author?: string }[]>([]);

  const randomQuotes = [
    { quote: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
    { quote: "Get busy living or get busy dying.", author: "Stephen King" },
    { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
    { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { quote: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" }
];


  const getNewQuote = () => {
    const random = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
    setQuote(random.quote);
    setAuthor(random.author);
  };

  const addToFavorites = () => {
    setFavorites([...favorites, { quote, author }]);
  };

  return (
    <View style={[defaultStyles.container, { backgroundColor: colors.background }]}>
      <Text style={defaultStyles.heading}>Random Quote Generator</Text>
      <QuoteCard quote={quote} author={author} onFavorite={addToFavorites} />
      <Button title="New Quote" color={colors.primary} onPress={getNewQuote} />
      <FavoriteQuotesList favorites={favorites} />
    </View>
  );
};

export default App;
