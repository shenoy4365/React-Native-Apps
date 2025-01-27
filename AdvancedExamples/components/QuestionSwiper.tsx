import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import defaultStyles from "../styles/defaultStyles";
import colors from "../styles/colors";

const questions = [
  {
    image: require("../assets/images/astrology1.png"),
    question: "What is the ruling planet of Aries?",
    options: ["Mars", "Venus", "Jupiter", "Mercury"],
    correct: "Mars",
  },
  {
    image: require("../assets/images/astrology1.png"),
    question: "Which zodiac sign is known as the twins?",
    options: ["Gemini", "Pisces", "Libra", "Aquarius"],
    correct: "Gemini",
  },
  {
    image: require("../assets/images/astrology1.png"),
    question: "What element is associated with Scorpio?",
    options: ["Water", "Fire", "Earth", "Air"],
    correct: "Water",
  },
];

const QuestionSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const handleOptionPress = (option: string) => {
    setSelectedOption(option);
    if (option === questions[currentIndex].correct) {
      setScore(score + 1);
    }
    setTimeout(() => {
      setSelectedOption(null);
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        alert(`Quiz Complete! Your score: ${score + (option === questions[currentIndex].correct ? 1 : 0)}`);
        setCurrentIndex(0);
        setScore(0);
      }
    }, 1000);
  };

  const renderQuestion = () => {
    const question = questions[currentIndex];

    return (
      <View style={defaultStyles.container}>
        <Image source={question.image} style={styles.image} />
        <Text style={defaultStyles.title}>{question.question}</Text>
        {question.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              defaultStyles.button,
              selectedOption === option && {
                backgroundColor: option === question.correct ? colors.secondary : colors.error,
              },
            ]}
            onPress={() => handleOptionPress(option)}
            disabled={selectedOption !== null}
          >
            <Text style={defaultStyles.buttonText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <FlatList
      data={[questions[currentIndex]]}
      renderItem={renderQuestion}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      scrollEnabled={false} // Disable user scrolling to control navigation
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
    borderRadius: 8,
    marginBottom: 16,
  },
});

export default QuestionSwiper;
