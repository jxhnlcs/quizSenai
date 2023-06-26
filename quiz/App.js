import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'react-native';

const QuizGame = () => {
  const [questions, setQuestions] = useState([
    {
      question: 'Qual campeão é irmão de Garen?',
      options: ['Vayne', 'Lux', 'Lucian', 'Sona'],
      correctAnswer: 'Lux',
      answered: false,
      userAnswer: null,
      hint: 'Os irmãos são de Demacia',
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
      hint: 'Dica: Longa distância.',
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
      hint: 'Dica: O melhor do mundo.',
    },

    {
      question: 'Qual campeão que usa um poste como arma?',
      options: ['Fiora', 'Jax', 'Leona', 'Azir'],
      correctAnswer: 'Jax',
      answered: false,
      userAnswer: null,
      hint: 'Dica: "Imagina se eu tivesse uma arma de verdade"',
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
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showLossMessage, setShowLossMessage] = useState(false);
  const [showWinMessage, setShowWinMessage] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [timer, setTimer] = useState(10); 

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
        setTimer(10); // Reiniciar o temporizador para a próxima pergunta
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
    setTimer(10); // Reiniciar o temporizador
  };

  const startGame = () => {
    resetQuiz();
    setGameStarted(true);
  };

  const returnToHome = () => {
    setGameStarted(false);
  };

  useEffect(() => {
    if (gameStarted) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => {
        clearInterval(countdown);
      };
    }
  }, [gameStarted]);

  useEffect(() => {
    if (timer === 0) {
      handleAnswer(''); // Pular para próxima pergunta
    }
  }, [timer]);

  return (
    <View style={styles.container}>
      {gameStarted ? (
        showScore ? (
          <View style={styles.scoreContainer}>

            {showLossMessage ? (
              <View style={styles.resultadocontainer}>
                <Image source={require('./assets/derrota.png')}style={styles.derrotaimg} />
                <Text style={styles.scoreText}>Você perdeu por acertar menos de 8 perguntas.</Text>
              </View>
            ) : (
              <View style={styles.resultadocontainer}>
                <Image source={require('./assets/victory.png')}style={styles.victoryimg} />
                <Text style={styles.scoreText}>Você venceu acertando {score} de {questions.length} perguntas!</Text>
              </View>
            )}
            <TouchableOpacity style={styles.button} onPress={resetQuiz}>
              <Text style={styles.buttonText}>Jogar Novamente</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={returnToHome}>
              <Text style={styles.buttonText}>Voltar para a Tela Inicial</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <View style={styles.timerContainer}>
              <Text style={styles.timerText}>Tempo restante: {timer} segundos</Text>
            </View>
            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
            </View>
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
        )
      ) : (
        <View style={styles.startContainer}>
          <Image source={require('./assets/logo.png')}style={styles.startimg} />
          <TouchableOpacity style={styles.startButton} onPress={startGame}>
            <Text style={styles.startButtonText}>Iniciar Jogo</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({

/*PRIMEIRA TELA*/
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#010A13',
  },

  startContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  startimg:{
    width: 300,
    height: 200
  },

  startButton: {
    fontWeight: 'bold',
    letterSpacing: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#1e2328',
    color: '#cdbe91',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderWidth: 2,
    borderColor: '#c8aa6d',
    borderImageSlice: 1,
  },

  startButtonText: {
    color: '#cdbe91',
    textShadowColor: '#ffffff80',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
    fontSize: 18,
  },

  resultadocontainer:{
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },

  victoryimg:{
    width: 400,
    height: 300,
  },

  derrotaimg:{
    width: 300,
    alignItems: 'center',
    height: 350,
  },

  questionContainer: {
    marginBottom: 20,
  },

  questionText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#e4d685',
    width: 300
  },

  optionButton: {
    backgroundColor: '#e4d685',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 5,
    justifyContent: 'space-evenly'
  },

  optionText: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
  },

  hintButton: {
    fontWeight: 'bold',
    letterSpacing: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#1e2328',
    color: '#cdbe91',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderWidth: 2,
    borderColor: '#c8aa6d',
    borderImageSlice: 1,
    marginTop: 5
  },

  hintButtonText: {
    color: '#cdbe91',
    textShadowColor: '#ffffff80',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
    fontSize: 18,
    textAlign: 'center'
  },

  hintText: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
    color: '#cdbe91',
  },

  scoreContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  scoreText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: '#cdbe91'
  },

  button: {
    fontWeight: 'bold',
    letterSpacing: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#1e2328',
    color: '#cdbe91',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderWidth: 2,
    borderColor: '#c8aa6d',
    borderImageSlice: 1,
    marginTop: 20,
    width: 250
  },

  buttonText: {
    color: '#cdbe91',
    textShadowColor: '#ffffff80',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
    fontSize: 18,
    textAlign: 'center'
  },

  timerContainer: {
    position: 'absolute',
    top: -100,
    right: -10,
  },

  timerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#cdbe91'
  },
});

export default QuizGame;
