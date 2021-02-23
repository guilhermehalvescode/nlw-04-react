import {useState} from 'react'
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
  const [experienceBar, setExperienceBar] = useState({
    initial: 0,
    percent: 0,
    max: 600
  });

  function tenPercent() {
    setExperienceBar(prev => {
      prev.percent += 10;
      return {
        ...prev
      };
    });
  }

  return (
    <header className={styles.experienceBar}>
      <span>{experienceBar.initial} xp</span>
      <div>
        <div style={{width: `${experienceBar.percent}%`}}></div>
        <span style={{left: `${experienceBar.percent}%`}} className={styles.currentExperience}>{(experienceBar.max - experienceBar.initial)*(experienceBar.percent/100.0) + experienceBar.initial} xp</span>
      </div>
      <span>{experienceBar.max} xp</span>
      <button onClick={tenPercent}>Aumentar em 10%</button>
    </header>
  );
}