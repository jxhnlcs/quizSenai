import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';

const QuizGame = () => {
  const [questions, setQuestions] = useState([
    {
      question: 'Qual campeão é irmão de Garen?',
      options: ['Vayne', 'Lux', 'Lucian', 'Sona'],
      correctAnswer: 'Lux',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Os irmãos faziam parte de uma família influente que serviu como protetores dos reis de Demacia por gerações.".',
    },

    {
      question: 'Qual o campeão conhecido como Amoeba no League of Legends?',
      options: ['Zac', 'Teemo', 'Jax', 'Fiora' ,' Heimerdinger '],
      correctAnswer: ' Zac',
      answered: false,
      userAnswer: null,
      hint: 'Verde".',
    },

    {
      question: 'Qual a cidade que a Fiora representa?',
      options: ['Noxus', 'Piltover', 'Ionia', 'Bandle city ',],
      correctAnswer: 'Demacia',
      answered: false,
      userAnswer: null,
      hint: 'Dica:  Em um reino imponente e legítimo com uma prestigiosa história militar, os habitantes de ... sempre colocaram os ideais de justiça, honra e dever acima de tudp.".',
    },

    {
      question: ' Qual menor campeão do jogo League of Legends?',
      options: ['Fizz', 'Heimerdinger', 'Tristana', 'Teemo'],
      correctAnswer: 'Teemo',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Nunca subestime o poder do código do escoteiro.".".',
    },

    {
      question: 'Qual é a capital da França?',
      options: ['Darius', 'Dreivennnnnn', 'Fiora', 'Gragas', 'Fiora'],
      correctAnswer: 'Gragas', 
      answered: false,
      userAnswer: null,
      hint: 'Dica: Esta cidade é conhecida como a "Cidade do Amor".',
    },

    {
      question: 'Qual foi o time Campeão mundial de 2015?',
      options: [' CLG', 'PAIN GAMING', 'FNATIC ', 'SKT T1 '],
      correctAnswer: ' SKT T1',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Esta cidade é conhecida como a "Cidade do Amor".',
    },

    {
      question: 'Qual campeão que usa um Poste de latão como arma?',
      options: ['Fiora', 'Jax', 'Leona', 'Azir'],
      correctAnswer: 'Jax',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Esta cidade é conhecida como a "Cidade do Amor".',
    },

    {
      question: 'Qual campeão é casado com Ashe?',
      options: ['Shen', 'Ahri', 'Zed', 'Tryndamere'],
      correctAnswer: 'Tryndamere',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Esta cidade é conhecida como a "Cidade do Amor".',
    },
    
    {
      question: 'Em qual classe campeã pertence Kalista?',
      options: ['Mago', 'Especialista', 'Atirador', 'Lutador'],
      correctAnswer: 'Atirador',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Esta cidade é conhecida como a "Cidade do Amor".',
    },

    {
      question: 'Em que nível a maioria dos campeões desbloqueia sua habilidade final?',
      options: ['Nível 7', 'Nível 6', 'Nível 5', 'Nível 3'],
      correctAnswer: 'Nível 6',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Esta cidade é conhecida como a "Cidade do Amor".',
    },

    {
      question: 'Qual o campeão que foi eleito pelos jogadores como o mais irritante?',
      options: ['Annie', 'Teemo', 'Master Yi', 'Jax'],
      correctAnswer: 'Teemo',
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

    // Adicione as outras perguntas aqui
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showLossMessage, setShowLossMessage] = useState(false);
  const [showWinMessage, setShowWinMessage] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleHint = () => {
    setShowHint(true);
  };

  const closeHintPopup = () => {
    setShowHint(false);
  };

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

  const resetQuiz = () => {
    setQuestions(
      questions.map((q) => ({
        ...q,
        answered: false,
        userAnswer: null,
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
          {showHint && (
  <View style={styles.hintPopup}>
    <Text style={styles.hintPopupText}>{questions[currentQuestion].hint}</Text>
    <TouchableOpacity style={styles.hintPopupButton} onPress={closeHintPopup}>
      <Text style={styles.hintPopupButtonText}>Fechar</Text>
    </TouchableOpacity>
  </View>
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