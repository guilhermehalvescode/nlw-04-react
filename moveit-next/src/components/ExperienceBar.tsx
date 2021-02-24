import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
  const { currentExperience, baseExperienceLevel, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(((currentExperience - baseExperienceLevel) * 100) / experienceToNextLevel);
  return (
    <header className={styles.experienceBar}>
      <span>{baseExperienceLevel} xp</span>
      <div>
        <div style={{width: `${percentToNextLevel}%`}} />
        <span style={{left: `${percentToNextLevel}%`}} className={styles.currentExperience}>{currentExperience} xp</span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}