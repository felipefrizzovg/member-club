import { apiConfig } from "./api-config.js";

export async function getClient({ id }) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/clients/${id}`)

    const data = await response.json()

    if (data.id === id) {
      console.log(data)
    } else {
      console.log("Esse cliente não existe")
    }
  } catch (e) {
    console.log(e);
    // alert("Não foi possível consultar o cliente")
  }
}