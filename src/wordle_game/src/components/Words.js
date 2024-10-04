import wordBank from "../wordle-bank.txt";
import lessonBank from "../lesson-bank.txt";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      wordSet = new Set(wordArr);
    });
  return { wordSet,todaysWord};
};

export const generateLessonSet = async () => {
  let lessonSet;
  let todaysLesson;
  await fetch(lessonBank)
    .then((response) => response.text())
    .then((result) => {
      const lessonArr = result.split("\n");
      todaysLesson = lessonArr[Math.floor(Math.random() * lessonArr.length)];
      lessonSet = new Set(lessonArr);
    });
  return { lessonSet,todaysLesson };
};