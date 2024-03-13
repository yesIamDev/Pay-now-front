import axios from "axios";
import { teacherUrl } from "./constante";

import { teacherState } from "../atoms/teachers";
import { useRecoilState } from "recoil";

const createTeacher = async (payload) => {
    try {
      const res = await axios.post(teacherUrl.addTeacher, payload);
      return res.data;
    } catch (error) {
      throw new Error("ENABLE_TO_FETCH_DATA");
    }
};

const getAllTeachers = async () => {
  try {
    fetch(teacherUrl.getAll).then((res) => {
      return res.json();
    });
  } catch (error) {
    throw new Error("ENABLE_TO_FETCH_DATA");
  }
};

const updateTeacher = async (teacherId) => {
  try {
    const res = await axios.update(teacherUrl.updateOne, teacherId);
    return res.data;
  } catch (error) {
    throw new Error("FAIL_TO_UPDATE_TEACHER");
  }
};

const deleteTeacher = async (teacherId) => {
  try {
    const res = await axios.delete(teacherUrl.deleteOne(teacherId));
    return res.data;
  } catch (error) {
    throw new Error("FAIL_TO_DELETE_TEACHER");
  }
};

export { createTeacher, getAllTeachers, updateTeacher, deleteTeacher };
