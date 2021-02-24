import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number; 
  currentExperience: number; 
  baseExperienceLevel: number;
  experienceToNextLevel: number;
  activeChallenge: Challenge;
  challengesCompleted: number; 
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: (challengeAmount: number) => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);


export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const baseExperienceLevel = level === 1 ? 0 : Math.pow(level * 4, 2)
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  }

  function completeChallenge(challengeAmount: number) {
    setChallengesCompleted(challengesCompleted + 1);
    const currExperience = currentExperience + challengeAmount;
    setCurrentExperience(currExperience);
    console.log(currExperience - experienceToNextLevel);
    if(currExperience - experienceToNextLevel >= 0){
      setLevel(level + 1);
    }
    resetChallenge();
  }

  return (
    <ChallengesContext.Provider value={{
      level, 
      currentExperience, 
      baseExperienceLevel,
      experienceToNextLevel,
      challengesCompleted, 
      activeChallenge,
      startNewChallenge,
      resetChallenge,
      completeChallenge
    }}>
      {children}
    </ChallengesContext.Provider>
  )
}