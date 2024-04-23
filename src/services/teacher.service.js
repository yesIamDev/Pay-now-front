import axios from "axios";
import { teacherUrl } from "./constante";

//create a new teacher

const createTeacher = async (payload) => {
    try {
      const res = await axios.post(teacherUrl.addTeacher, payload);
      return res.data;
    } catch (error) {
      throw new Error("ENABLE_TO_FETCH_DATA");
    }
};

// show all teachers registred

const getAllTeachers = async () => {
  try {
    fetch(teacherUrl.getAll).then((res) => {
      return res.json();
    });
  } catch (error) {
    throw new Error("ENABLE_TO_FETCH_DATA");
  }
};

// update teacher's informations

const updateTeacher = async (teacherId) => {
  try {
    const res = await axios.update(teacherUrl.updateOne, teacherId);
    return res.data;
  } catch (error) {
    throw new Error("FAIL_TO_UPDATE_TEACHER");
  }
};

// delete a teacher

const deleteTeacher = async (teacherId) => {
  try {
    const res = await axios.delete(teacherUrl.deleteOne(teacherId));
    return res.data;
  } catch (error) {
    throw new Error("FAIL_TO_DELETE_TEACHER");
  }
};

export { createTeacher, getAllTeachers, updateTeacher, deleteTeacher };
