// components/SdgLesson.js
import React,{useContext} from 'react';
import { AppContext } from "../App";

const SdgLesson = () => {
    const {lessonContent,loadNextLevel}= useContext(AppContext);
  return (
    <div className="sdg-lesson">
      <h2 className="lesson-title">SDG Lesson</h2>
      <p className="lesson-content">{lessonContent}</p>
      <div className="button-container">
        <button className="next-level-button" onClick={loadNextLevel}>
          Next Level
        </button>
      </div>
    </div>
  );
};

export default SdgLesson;
