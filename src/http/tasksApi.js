import axios from "axios"

export const createTask = async (payload) => {
  const {data} = await axios.post(`https://practic3-vuejs-default-rtdb.europe-west1.firebasedatabase.app/tasks.json`, {...payload})
  return data
}

export const getAllTasks = async () => {
  const {data} = await axios.get('https://practic3-vuejs-default-rtdb.europe-west1.firebasedatabase.app/tasks.json')
  return data
}

export const changeStateTask = async (id, payload) => {
  const {data} = await axios.put(`https://practic3-vuejs-default-rtdb.europe-west1.firebasedatabase.app/tasks/${id}.json`, {...payload})
   return data
}

export const removeTask = async (id) => {
  const {data} = await axios.delete(`https://practic3-vuejs-default-rtdb.europe-west1.firebasedatabase.app/tasks/${id}.json`)
  return data
}
