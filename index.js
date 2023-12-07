const readline = require('readline');
const fs = require('fs');
let rl;

let questions;

// Incorporate questions directly into the file
const questionData = `[
  {
    "pergunta": "O que significa a sigla HTML?",
    "opcoes": [
      {"letra": "A", "opcao": "Hypertext Markup Language"},
      {"letra": "B", "opcao": "Hyper Transfer Markup Language"},
      {"letra": "C", "opcao": "High-Level Text Markup Language"}
    ],
    "respostaCorreta": "A"
  },
  {
    "pergunta": "O que é o CSS?",
    "opcoes": [
      {"letra": "A", "opcao": "Counter Style Sheet"},
      {"letra": "B", "opcao": "Cascading Style Sheet"},
      {"letra": "C", "opcao": "Computer Style Sheet"}
    ],
    "respostaCorreta": "B"
  },
  {
    "pergunta": "O que significa a sigla UX?",
    "opcoes": [
      {"letra": "A", "opcao": "User Experience"},
      {"letra": "B", "opcao": "User Extension"},
      {"letra": "C", "opcao": "Universal Experience"}
    ],
    "respostaCorreta": "A"
  },
  {
    "pergunta": "Qual linguagem de programação é amplamente utilizada para o desenvolvimento web?",
    "opcoes": [
      {"letra": "A", "opcao": "Java"},
      {"letra": "B", "opcao": "C#"},
      {"letra": "C", "opcao": "JavaScript"}
    ],
    "respostaCorreta": "C"
  },
  {
    "pergunta": "O que é responsividade em design web?",
    "opcoes": [
      {"letra": "A", "opcao": "Capacidade de resposta do servidor"},
      {"letra": "B", "opcao": "Adaptabilidade a diferentes dispositivos"},
      {"letra": "C", "opcao": "Velocidade de carregamento da página"}
    ],
    "respostaCorreta": "B"
  },
  {
    "pergunta": "O que é um wireframe?",
    "opcoes": [
      {"letra": "A", "opcao": "Documento de requisitos"},
      {"letra": "B", "opcao": "Protótipo de alta fidelidade"},
      {"letra": "C", "opcao": "Esboço visual de uma página"}
    ],
    "respostaCorreta": "C"
  },
  {
    "pergunta": "Qual é a principal função do JavaScript em uma página web?",
    "opcoes": [
      {"letra": "A", "opcao": "Estilização da página"},
      {"letra": "B", "opcao": "Interatividade e dinamismo"},
      {"letra": "C", "opcao": "Armazenamento de dados"}
    ],
    "respostaCorreta": "B"
  },
  {
    "pergunta": "O que é SEO?",
    "opcoes": [
      {"letra": "A", "opcao": "Search Engine Optimization"},
      {"letra": "B", "opcao": "Social Engagement Optimization"},
      {"letra": "C", "opcao": "Site Efficiency Optimization"}
    ],
    "respostaCorreta": "A"
  },
  {
    "pergunta": "O que é um CMS?",
    "opcoes": [
      {"letra": "A", "opcao": "Content Management System"},
      {"letra": "B", "opcao": "Code Management System"},
      {"letra": "C", "opcao": "Customer Management System"}
    ],
    "respostaCorreta": "A"
  },
  {
    "pergunta": "O que é UI?",
    "opcoes": [
      {"letra": "A", "opcao": "User Integration"},
      {"letra": "B", "opcao": "User Interaction"},
      {"letra": "C", "opcao": "User Interface"}
    ],
    "respostaCorreta": "C"
  },
  {
    "pergunta": "Qual é a principal diferença entre UI (User Interface) e UX (User Experience)?",
    "opcoes": [
      {"letra": "A", "opcao": "UI se refere à aparência visual, enquanto UX se refere à experiência do usuário como um todo"},
      {"letra": "B", "opcao": "UI e UX são termos intercambiáveis"},
      {"letra": "C", "opcao": "UI é uma subcategoria de UX"}
    ],
    "respostaCorreta": "A"
  },
  {
    "pergunta": "O que é Git?",
    "opcoes": [
      {"letra": "A", "opcao": "Um sistema operacional"},
      {"letra": "B", "opcao": "Um banco de dados"},
      {"letra": "C", "opcao": "Um sistema de controle de versão"}
    ],
    "respostaCorreta": "C"
  },
  {
    "pergunta": "O que é um framework de front-end?",
    "opcoes": [
      {"letra": "A", "opcao": "Um modelo de negócios"},
      {"letra": "B", "opcao": "Uma ferramenta para o desenvolvimento de interfaces de usuário"},
      {"letra": "C", "opcao": "Um tipo de servidor web"}
    ],
    "respostaCorreta": "B"
  },
  {
    "pergunta": "O que é um servidor web?",
    "opcoes": [
      {"letra": "A", "opcao": "Um computador de alta capacidade de processamento"},
      {"letra": "B", "opcao": "Um programa que processa solicitações HTTP"},
      {"letra": "C", "opcao": "Um protocolo de comunicação"}
    ],
    "respostaCorreta": "B"
  },
  {
    "pergunta": "O que significa a sigla UI/UX?",
    "opcoes": [
      {"letra": "A", "opcao": "Unified Integration/Universal Experience"},
      {"letra": "B", "opcao": "User Interaction/User Experience"},
      {"letra": "C", "opcao": "User Interface/User Extension"}
    ],
    "respostaCorreta": "B"
  },
  {
    "pergunta": "Qual é a função do Photoshop em design gráfico?",
    "opcoes": [
      {"letra": "A", "opcao": "Edição de texto"},
      {"letra": "B", "opcao": "Edição de imagem"},
      {"letra": "C", "opcao": "Desenvolvimento web"}
    ],
    "respostaCorreta": "B"
  },
  {
    "pergunta": "O que é um wireframe?",
    "opcoes": [
      {"letra": "A", "opcao": "Um tipo de fonte"},
      {"letra": "B", "opcao": "Um esboço visual de uma página"},
      {"letra": "C", "opcao": "Um modelo 3D"}
    ],
    "respostaCorreta": "B"
  },
  {
    "pergunta": "Qual é a principal linguagem de estilização utilizada em páginas web?",
    "opcoes": [
      {"letra": "A", "opcao": "Java"},
      {"letra": "B", "opcao": "CSS"},
      {"letra": "C", "opcao": "Python"}
    ],
    "respostaCorreta": "B"
  },
  {
    "pergunta": "O que é um cookie em desenvolvimento web?",
    "opcoes": [
      {"letra": "A", "opcao": "Um arquivo de imagem"},
      {"letra": "B", "opcao": "Um pequeno texto enviado pelo servidor e armazenado no navegador do usuário"},
      {"letra": "C", "opcao": "Um código JavaScript"}
    ],
    "respostaCorreta": "B"
  },
  {
    "pergunta": "O que significa a sigla API?",
    "opcoes": [
      {"letra": "A", "opcao": "Application Programming Interface"},
      {"letra": "B", "opcao": "Advanced Program Installation"},
      {"letra": "C", "opcao": "Automated Program Interaction"}
    ],
    "respostaCorreta": "A"
  },
  {
    "pergunta": "O que é um banco de dados relacional?",
    "opcoes": [
      {"letra": "A", "opcao": "Um tipo de linguagem de programação"},
      {"letra": "B", "opcao": "Um sistema de gerenciamento de banco de dados"},
      {"letra": "C", "opcao": "Um modelo de dados que organiza as informações em tabelas relacionadas"}
    ],
    "respostaCorreta": "C"
  },
  {
    "pergunta": "Qual é a diferença entre um designer UX e um designer UI?",
    "opcoes": [
      {"letra": "A", "opcao": "UX se concentra na aparência visual, enquanto UI se concentra na experiência do usuário"},
      {"letra": "B", "opcao": "UI se concentra na aparência visual, enquanto UX se concentra na experiência do usuário"},
      {"letra": "C", "opcao": "Não há diferença, são termos intercambiáveis"}
    ],
    "respostaCorreta": "B"
  },
  {
    "pergunta": "O que é um CDN?",
    "opcoes": [
      {"letra": "A", "opcao": "Content Delivery Network"},
      {"letra": "B", "opcao": "Centralized Data Network"},
      {"letra": "C", "opcao": "Computer Design Network"}
    ],
    "respostaCorreta": "A"
  },
  {
    "pergunta": "O que é JavaScript ES6?",
    "opcoes": [
      {"letra": "A", "opcao": "Uma versão mais antiga do JavaScript"},
      {"letra": "B", "opcao": "Uma linguagem de programação diferente"},
      {"letra": "C", "opcao": "A sexta edição do padrão ECMAScript para JavaScript"}
    ],
    "respostaCorreta": "C"
  },
  {
    "pergunta": "O que é Scrum?",
    "opcoes": [
      {"letra": "A", "opcao": "Um método ágil de desenvolvimento de software"},
      {"letra": "B", "opcao": "Um software de edição de imagem"},
      {"letra": "C", "opcao": "Um framework para desenvolvimento de jogos"}
    ],
    "respostaCorreta": "A"
  },
  {
    "pergunta": "O que é um ambiente de desenvolvimento (IDE)?",
    "opcoes": [
      {"letra": "A", "opcao": "Um software de edição de imagem"},
      {"letra": "B", "opcao": "Um programa para criar música"},
      {"letra": "C", "opcao": "Um ambiente integrado para escrever, testar e depurar código"}
    ],
    "respostaCorreta": "C"
  },
  {
    "pergunta": "O que é Bootstrap?",
    "opcoes": [
      {"letra": "A", "opcao": "Uma linguagem de programação"},
      {"letra": "B", "opcao": "Um framework de front-end"},
      {"letra": "C", "opcao": "Um sistema operacional"}
    ],
    "respostaCorreta": "B"
  },
  {
    "pergunta": "Qual é a principal função do Node.js?",
    "opcoes": [
      {"letra": "A", "opcao": "Desenvolvimento de jogos"},
      {"letra": "B", "opcao": "Execução de código JavaScript no servidor"},
      {"letra": "C", "opcao": "Edição de imagem"}
    ],
    "respostaCorreta": "B"
  },
  {
    "pergunta": "O que é o método HTTP GET?",
    "opcoes": [
      {"letra": "A", "opcao": "Um método para enviar dados ao servidor"},
      {"letra": "B", "opcao": "Um método para obter dados do servidor"},
      {"letra": "C", "opcao": "Um método para excluir dados do servidor"}
    ],
    "respostaCorreta": "B"
  },
  {
    "pergunta": "O que é RESTful?",
    "opcoes": [
      {"letra": "A", "opcao": "Um estilo arquitetural para projetar redes de computadores"},
      {"letra": "B", "opcao": "Um tipo de linguagem de programação"},
      {"letra": "C", "opcao": "Um estilo de design de API web que segue os princípios REST"}
    ],
    "respostaCorreta": "C"
  },
 {
    "pergunta": "O que é o DOM?",
    "opcoes": [
      {"letra": "A", "opcao": "Document Object Model"},
      {"letra": "B", "opcao": "Data Object Model"},
      {"letra": "C", "opcao": "Digital Object Model"}
    ],
    "respostaCorreta": "A"
  }
]`;


function loadQuestions() {
  try {
    questions = JSON.parse(questionData);
  } catch (error) {
    console.error('Erro ao carregar as perguntas do arquivo JSON:', error.message);
    process.exit(1);
  }
}

function startGame() {

  loadQuestions();

  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Digite o seu nome: ', (name) => {
    console.log(`Bem-vindo ao jogo, ${name}!\n`);

    let score = 0;
    let round = 1;
    let prizeIfCorrect = 100;
    let penaltyIfWrong = 0;
    let stopPrize = 0;

    function askQuestion() {
      const randomItem = Math.floor(Math.random() * questions.length);
      const currentQuestion = questions.splice(randomItem, 1)[0];

      if (!currentQuestion) {
        console.log('Fim do Jogo! Perguntas insuficientes.');
        rl.close();
        return;
      }

      console.log(`Rodada ${round}`);
      console.log(`Pergunta: ${currentQuestion.pergunta}`);

      if (currentQuestion.opcoes && Array.isArray(currentQuestion.opcoes)) {
        currentQuestion.opcoes.forEach((option) => console.log(`(${option.letra}) ${option.opcao}`));
      } else {
        console.log('Opções não encontradas para esta pergunta.');
      }

      console.log(`\nPrêmio se acertar: R$${prizeIfCorrect}`);
      console.log(`Prêmio se errar:    R$${penaltyIfWrong}`);
      console.log(`Prêmio se parar:    R$${stopPrize}\n`);

      rl.question('Sua resposta (ou digite "parar" para encerrar): ', (answer) => {
        if (answer.toLowerCase() === 'parar') {
          endGame(name, round - 1, score);
        } else if (answer.toUpperCase() === currentQuestion.respostaCorreta) {
          score = prizeIfCorrect;
          console.log(`Correto! Você ganhou R$${prizeIfCorrect}.\n`);
          round++;
          if (round <= 5) {
            prizeIfCorrect *= 2;
            penaltyIfWrong = stopPrize / 2; // Ajuste para o valor ao errar
            stopPrize = score; // Ajuste para o valor ao parar
            askQuestion();
          } else {
            endGame(name, round - 1, score);
          }
        } else {
          score = penaltyIfWrong;
          console.log(`Incorreto! Você perdeu R$${penaltyIfWrong}.`);
          console.log(`Fim do Jogo!\nJogador: ${name}\nParou na rodada ${round}. Faltavam ${5 - round} rodadas.`);
          console.log(`A resposta correta da última pergunta respondida era: (${currentQuestion.respostaCorreta})`);
          console.log(`Pontuação Final: R$${score}`);
          rl.question('Deseja jogar novamente? (s/n) ', (playAgain) => {
            if (playAgain.toLowerCase() === 's') {
              rl.close();
              startGame();
            } else {
              rl.close();
            }
          });
        }
      });
    }

    function endGame(name, round, score) {
      console.log('Fim do Jogo!');
      console.log(`Jogador: ${name}`);
      console.log(`Parou na rodada ${round}. Faltavam ${5 - round} rodadas.`);
      console.log('A resposta correta da última pergunta respondida era.');
      console.log(`Pontuação Final: R$${score}`);
      rl.question('Deseja jogar novamente? (s/n) ', (playAgain) => {
        if (playAgain.toLowerCase() === 's') {
          rl.close();
          startGame();
        } else {
          rl.close();
        }
      });
    }

    askQuestion();
  });
}

startGame();
