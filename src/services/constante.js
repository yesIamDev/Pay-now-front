// ------ BACKEND URL ---------

const backendUrl = "http://127.0.0.1:3333";

// ------ API URL HELPER --------

export const authUrl = {
  login: `${backendUrl}/api/v1/login`,
  signup: `${backendUrl}/api/v1/users`,
};

export const teacherUrl = {
  addTeacher: `${backendUrl}/api/v1/teachers`,
  getAll: `${backendUrl}/api/v1/teachers`,
  deleteOne: (teacherId) => `${backendUrl}/api/v1/teachers/${teacherId}`,
  updateOne: (teacherId) => `${backendUrl}/api/v1/teachers/${teacherId}`,
};

export const coursUrl = {
  addCours: `${backendUrl}/api/v1/cours`,
  getAll : `${backendUrl}/api/v1/paiements`,
  deleteOne : (coursId) => `${backendUrl}/api/v1/cours/${coursId}`,
  updateOne : (coursId) => `${backendUrl}/api/v1/cours/${coursId}`
}

export const paiementUrl = {
  addPaiement : `${backendUrl}/api/v1/paiements`,
  getAll: `${backendUrl}/api/v1/paiements`,
}