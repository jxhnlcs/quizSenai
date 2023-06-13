import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuizGame = () => {
  const [questions, setQuestions] = useState([
    {
      question: 'Qual é a capital da França?',
      options: ['Paris', 'Londres', 'Madrid', 'Berlim'],
      correctAnswer: 'Paris',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Esta cidade é conhecida como a "Cidade do Amor".',
    },

    {
      question: 'Qual é a capital da França?',
      options: ['Paris', 'Londres', 'Madrid', 'Berlim'],
      correctAnswer: 'Paris',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Esta cidade é conhecida como a "Cidade do Amor".',
    },

    {
      question: 'Qual é a capital da França?',
      options: ['Paris', 'Londres', 'Madrid', 'Berlim'],
      correctAnswer: 'Paris',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Esta cidade é conhecida como a "Cidade do Amor".',
    },

    {
      question: 'Qual é a capital da França?',
      options: ['Paris', 'Londres', 'Madrid', 'Berlim'],
      correctAnswer: 'Paris',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Esta cidade é conhecida como a "Cidade do Amor".',
    },

    {
      question: 'Qual é a capital da França?',
      options: ['Paris', 'Londres', 'Madrid', 'Berlim'],
      correctAnswer: 'Paris',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Esta cidade é conhecida como a "Cidade do Amor".',
    },

    {
      question: 'Qual é a capital da França?',
      options: ['Paris', 'Londres', 'Madrid', 'Berlim'],
      correctAnswer: 'Paris',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Esta cidade é conhecida como a "Cidade do Amor".',
    },

    {
      question: 'Qual é a capital da França?',
      options: ['Paris', 'Londres', 'Madrid', 'Berlim'],
      correctAnswer: 'Paris',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Esta cidade é conhecida como a "Cidade do Amor".',
    },

    {
      question: 'Qual é a capital da França?',
      options: ['Paris', 'Londres', 'Madrid', 'Berlim'],
      correctAnswer: 'Paris',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Esta cidade é conhecida como a "Cidade do Amor".',
    },
    
    {
      question: 'Qual é a capital da França?',
      options: ['Paris', 'Londres', 'Madrid', 'Berlim'],
      correctAnswer: 'Paris',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Esta cidade é conhecida como a "Cidade do Amor".',
    },

    {
      question: 'Qual é a capital da França?',
      options: ['Paris', 'Londres', 'Madrid', 'Berlim'],
      correctAnswer: 'Paris',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Esta cidade é conhecida como a "Cidade do Amor".',
    },

    {
      question: 'Qual é a capital da França?',
      options: ['Paris', 'Londres', 'Madrid', 'Berlim'],
      correctAnswer: 'Paris',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Esta cidade é conhecida como a "Cidade do Amor".',
    },

    {
      question: 'Qual é a capital da França?',
      options: ['Paris', 'Londres', 'Madrid', 'Berlim'],
      correctAnswer: 'Paris',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Esta cidade é conhecida como a "Cidade do Amor".',
    },

    {
      question: 'Qual é a capital da França?',
      options: ['Paris', 'Londres', 'Madrid', 'Berlim'],
      correctAnswer: 'Paris',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Esta cidade é conhecida como a "Cidade do Amor".',
    },

    {
      question: 'Qual é a capital da França?',
      options: ['Paris', 'Londres', 'Madrid', 'Berlim'],
      correctAnswer: 'Paris',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Esta cidade é conhecida como a "Cidade do Amor".',
    },

    {
      question: 'Qual é a capital da França?',
      options: ['Paris', 'Londres', 'Madrid', 'Berlim'],
      correctAnswer: 'Paris',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Esta cidade é conhecida como a "Cidade do Amor".',
    },

  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showLossMessage, setShowLossMessage] = useState(false);
  const [showWinMessage, setShowWinMessage] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (!questions[currentQuestion].answered) {
      const updatedQuestions = [...questions];
      updatedQuestions[currentQuestion].answered = true;
      updatedQuestions[currentQuestion].userAnswer = selectedOption;
      setQuestions(updatedQuestions);

      if (selectedOption === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }

      if (currentQuestion === questions.length - 1) {
        setShowScore(true);
        if (score < 8) {
          setShowLossMessage(true);
        } else {
          setShowWinMessage(true);
        }
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    }
  };

  const handleHint = () => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].hintUsed = true;
    setQuestions(updatedQuestions);
  };

  const resetQuiz = () => {
    setQuestions(
      questions.map((q) => ({
        ...q,
        answered: false,
        userAnswer: null,
        hintUsed: false,
      }))
    );
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setShowLossMessage(false);
    setShowWinMessage(false);
  };

  return (
    <View style={styles.container}>
      {showScore ? (
        <View style={styles.scoreContainer}>
          {showLossMessage ? (
            <Text style={styles.scoreText}>Você perdeu por acertar menos de 8 perguntas.</Text>
          ) : (
            <Text style={styles.scoreText}>Você venceu acertando {score} de {questions.length} perguntas!</Text>
          )}
          <TouchableOpacity style={styles.button} onPress={resetQuiz}>
            <Text style={styles.buttonText}>Jogar Novamente</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
          {questions[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => handleAnswer(option)}
              disabled={questions[currentQuestion].answered}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
          {!questions[currentQuestion].answered && !questions[currentQuestion].hintUsed && (
            <TouchableOpacity style={styles.hintButton} onPress={handleHint}>
              <Text style={styles.hintButtonText}>Dica</Text>
            </TouchableOpacity>
          )}
          {questions[currentQuestion].hintUsed && (
            <Text style={styles.hintText}>{questions[currentQuestion].hint}</Text>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  questionText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
  },
  hintButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  hintButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  hintText: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default QuizGame;
