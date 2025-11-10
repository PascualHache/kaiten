import { useEffect, useState } from "react";
import "./WorkInProgress.css";

function WorkInProgress() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const unlocked = localStorage.getItem("unlock-work-in-progress") === "true";
    setIsUnlocked(unlocked);
  }, []);

  if (isUnlocked) {
    return null;
  }

  return (
    <div className="work-in-progress">
      <div className="wip-container">
        <div className="wip-icon">⚙️</div>
        <h1>Trabajo en Progreso</h1>
        <p>
          Esta página se encuentra en desarrollo. Vuelve pronto para ver las
          novedades.
        </p>
      </div>
    </div>
  );
}

export default WorkInProgress;
