import { useState, useContext } from "react";
import { Questions } from "../../utils/validateQuestionsJson";
import { GameContext } from "../../contexts/GameContext";
import Button from "../common/Button";

const SetQuestions = () => {
  const { gameState, setGameState } = useContext(GameContext);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setErrorMessage(null); // Reset error message when a new file is selected
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const data = JSON.parse(reader.result as string);
          const validationResult = Questions.decode(data);
          if (validationResult._tag === "Right") {
            setGameState({ ...gameState, questions: validationResult.right });
            setErrorMessage(null); // Reset error message when the data is valid
          } else {
            setErrorMessage("Invalid data. Please upload a valid json file"); // Set error message when the data is invalid
            console.error(`Invalid data: ${JSON.stringify(data)}`);
          }
        } catch (error) {
          console.error("Error parsing JSON file:", error);
          setErrorMessage("Error parsing JSON file. Try again"); // Set error message when there's an error parsing the JSON
        }
      };
      reader.readAsText(selectedFile);
    }
  };

  return (
    <div className="py-6">
      <input
        type="file"
        accept=".json"
        onChange={handleFileChange}
        className="mb-4"
      />
      <Button onClick={handleFileUpload} disabled={!selectedFile} secondary>
        Upload
      </Button>
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
      <div className="space-y-6 mt-6 mb-6">
        {gameState.questions.map((question, questionIndex) => (
          <div
            key={questionIndex}
            className="p-6 border rounded shadow bg-white"
          >
            <h2 className="text-2xl font-bold mb-4">
              Question {questionIndex + 1}: {question.question}
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              {question.answers.map((answer, answerIndex) => (
                <li key={answerIndex} className="text-lg">
                  {answer.answer} ({answer.value})
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {gameState.questions.length > 0 && <Button>Start Game</Button>}
    </div>
  );
};

export default SetQuestions;
