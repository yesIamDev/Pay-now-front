import { atom, selector } from "recoil";
// import { getAllTeachers } from "../services/teacher.service";

export const teacherState = atom({
  key: "teacherState",
  default: {
    teachers: [],
    currentTeacher: null,
  },
});

export const fetchTeachers = selector({
  key: "fetchTeachers",
  get: async ({ get }) => {
    const { teachers } = get(teacherState);
    try {
      const response = await fetch("http://127.0.0.1:3333/api/v1/teachers");
      if (!response.ok) {
        throw new Error("Erreur HTTP: " + response.status);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Une erreur s'est produite:", error);
      return [];
    }
  }
});


export const currentTeacher = selector({
  key: "current-teacher",
  get: ({get}) => {
    const {currentTeacher} = get(teacherState)
    if( currentTeacher === null){
      return null
    }
    return fetch ("http://127.0.0.1:3333/api/v1/teachers/"+currentTeacher).then(r => r.json())
    return currentTeacher
  }
});
