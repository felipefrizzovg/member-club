import { checkID } from "../services/checkID.js";

const form = document.querySelector('form');
const input = document.querySelector('#input')

// formata o numero que o usuario colocar no input
  input.addEventListener('input', (e) => {
    const formattedValue = mask(e.target.value)
  
    e.target.value = formattedValue
  })

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const checked = await checkID(input.value)

    console.log(checked)

    if (checked === undefined) {
      alert("Esse ID é inválido")
    } else {
      alert("Esse ID é válido")
    }
  })

const mask = (value) => {
  return value.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1-$2')
   .replace(/(\d{3})(\d)/, '$1-$2')
   .replace(/(\d{3})(\d{1,2})/, '$1-$2')
   .replace(/(-\d{3})\d+?$/, '$1')
}