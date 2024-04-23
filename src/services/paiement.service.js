import axios from "axios";
import {paiementUrl} from "./constante"

// register a new paiement

const createPaiement = async (payload) => {
  try{
    const res = await axios.post(paiementUrl.createPaiement,payload);
    return res.data;
  }catch(error){
    throw new Error("FAIL_TO_FETCH_DATA");
  }
}

//get all paiement

const getAllPaiment = async () => {
  try{
    const res = await axios.get(paiementUrl.getAllPaiment);
    res.data;
  }catch(error){
    throw new Error("FAIL_TO_FETCH_DATA");
  }
}

export {createPaiement, getAllPaiment};