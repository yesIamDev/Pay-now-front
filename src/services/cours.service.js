import axios from "axios";
import {coursUrl} from "./constante"

// create a new cours

const createCours = async (payload) => {
  try{
      const res = await axios.post(coursUrl.addCours, payload);
      return res.data
  }catch(error){
    throw new Error("ENABLE_TO_FETCH_DATA");
  }
}

// show all cours

const getAllCours = async () => {
  try{
    cont res = await axios.get(coursUrl.getAll);
    return res.data
  }catch(error){
    throw new Error("ENABLE_TO_FETCH_DATA");
  }
}

// update

const updateCours = async (coursId) => {
  try{
      const res = await axios.update(coursUrl.updateOne(coursId));
      return res.data;
  }catch(error){
    throw new Error("FAIL_TO_UPDATE_COURS");
  }
}

//delete

const deleteCours = async (coursId) => {
  try{
      const res = await axios.delete(coursUrl.deleteOne(coursId));
      return res.data;
  }catch(error){
    throw new Error("FAIL_TO_DELETE_COURS");
  }
}

export {createCours, getAllCours, updateCours, deleteCours};