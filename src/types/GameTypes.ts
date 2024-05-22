
interface Answer {
  answer: string;
  value: number;
}

export interface Question {
  question: string;
  answers: Answer[];
}

interface Team {
  name: string;
  score: number;
}

enum RoundStatus {
  QuestionPhase,
  GuessPhase,
  RevealPhase,  
}

interface Round {
  number: number;
  currentQuestion?: Question;
  score: number;
  status: RoundStatus;
  // Add other properties related to the round here
}

// When round is undefined it means that the game has not started yet
export interface GameState {
  questions: Question[];
  team1: Team;
  team2: Team;
  round?: Round;
}