import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuizGame = () => {
  const [questions, setQuestions] = useState([
    {
      question: 'Qual campeão é irmão de Garen?',
      options: ['Vayne', 'Lux', 'Lucian', 'Sona'],
      correctAnswer: 'Lux',
      answered: false,
      userAnswer: null,
      hint: 'Os irmãos faziam parte de uma família influente que serviu como protetores dos reis de Demacia por gerações.',
    },

    {
      question: 'O que significa a abreviatura TFT?',
      options: ['Team for Team', 'Team for Team', 'Teamfight Tactics', 'Teams for Tactics'],
      correctAnswer: 'Teamfight Tactics',
      answered: false,
      userAnswer: null,
      hint: 'Duelo em equipe em inglês.',
    },

    {
      question: 'Quem criou o Blitzcrank?',
      options: ['Viktor', 'Dr. Mundo', 'Camille', 'Urgot'],
      correctAnswer: 'Viktor',
      answered: false,
      userAnswer: null,
      hint: 'Seu criador é um campeão que reside em Zaun.',
    },

    {
      question: 'Como o mapa 3vs3 foi chamado em inglês?',
      options: ['Summoner’s Rift', 'Twisted Treeline', 'Forbidden Forest', 'Dark Forest'],
      correctAnswer: 'Twisted Treeline',
      answered: false,
      userAnswer: null,
      hint: '"Linhas das árvores".',
    },

    {
      question: 'Quantos campeões estavam disponíveis quando o jogo foi lançado?',
      options: ['30', '40', '50', '20'],
      correctAnswer: '40',
      answered: false,
      userAnswer: null,
      hint: 'Dica: >= 30 ou <=50.',
    },

    {
      question: 'Qual campeão é casado com Ashe?',
      options: ['Shen', 'Ahri', 'Zed', 'Tryndamere'],
      correctAnswer: 'Tryndamere',
      answered: false,
      userAnswer: null,
      hint: 'Esse campeão reside em Freljord.',
    },

    {
      question: 'Em qual classe campeã pertence Kalista?',
      options: ['Mago', 'Especialista', 'Atirador', 'Lutador'],
      correctAnswer: 'Atirador',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Essa classe costuma ter campeões que usam armas de longa distância.',
    },

    {
      question: 'Em que nível a maioria dos campeões desbloqueia sua habilidade final?',
      options: ['Nível 7', 'Nível 6', 'Nível 5', 'Nível 3'],
      correctAnswer: 'Nível 6',
      answered: false,
      userAnswer: null,
      hint: 'Dica: É menor que nível 10.',
    },

    {
      question: 'Qual o campeão conhecido como Amoeba no League of Legends?',
      options: ['Zac', 'Teemo', 'Jax', 'Fiora', ' Heimerdinger '],
      correctAnswer: 'Zac',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Verde.',
    },

    {
      question: 'Qual a nação que a Fiora representa?',
      options: ['Noxus', 'Piltover', 'Ionia', 'Demacia',],
      correctAnswer: 'Demacia',
      answered: false,
      userAnswer: null,
      hint: 'É uma nação em crise.',
    },

    {
      question: ' Qual menor campeão do jogo League of Legends?',
      options: ['Fizz', 'Heimerdinger', 'Tristana', 'Teemo'],
      correctAnswer: 'Teemo',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Ele faz cocô.',
    },

    {
      question: 'Qual foi o time Campeão mundial de 2015?',
      options: [' CLG', 'PAIN GAMING', 'FNATIC ', 'SKT T1'],
      correctAnswer: 'SKT T1',
      answered: false,
      userAnswer: null,
      hint: 'Dica: É o time de um cara que já foi considerado o melhor do mundo.',
    },

    {
      question: 'Qual campeão que usa um poste como arma?',
      options: ['Fiora', 'Jax', 'Leona', 'Azir'],
      correctAnswer: 'Jax',
      answered: false,
      userAnswer: null,
      hint: 'Dica: "Imagina se eu tivesse uma arma de verdade" disse ele.',
    },

    {
      question: 'Quem é a irmã de Kayle?',
      options: ['Morgana', 'Katarina', 'Akali', 'Cassiopeia'],
      correctAnswer: 'Morgana',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Conhecida como "O Anjo Caído".',
    },

    {
      question: 'Qual campeão é conhecido como "Aspecto do Crepúsculo"',
      options: ['Kayle', 'Aurelion Sol', 'Aatrox', 'Zoe'],
      correctAnswer: 'Zoe',
      answered: false,
      userAnswer: null,
      hint: 'Dica: Tem cabelo grande.',
    },

    // Adicione as outras perguntas aqui
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
          
        </View>
        
      )}
      {!questions[currentQuestion].answered && !questions[currentQuestion].hintUsed && (
            <TouchableOpacity style={styles.hintButton} onPress={handleHint}>
              <Text style={styles.hintButtonText}>Dica</Text>
            </TouchableOpacity>
          )}
          {questions[currentQuestion].hintUsed && (
            <Text style={styles.hintText}>{questions[currentQuestion].hint}</Text>
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