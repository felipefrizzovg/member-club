import { apiConfig } from "./api-config.js";
import { renderElements } from "../modules/renderElements.js";

export async function checkID(id) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/clients/`)

    const data = await response.json()

    const result = Array(data)

    let client
    
    result.forEach((e) => {
      e.map((item) => {
        if (item.id === id) {
          // decide o que vai fazer 
          renderElements(item)
          client = item
        }
      })
    })

    return client
  } catch (e) {
    console.log(e);
    alert("Não foi possível consultar o cliente")
  }
}