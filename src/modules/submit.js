const input = document.querySelector('.input-wrapper input')

// formata o numero que o usuario colocar no input
input.addEventListener('input', (e) => {
  e.preventDefault();

  const inputValue = e.target.value;

  const formattedValue = mask(inputValue)

  e.target.value = formattedValue
})

const mask = (value) => {
  return value.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1-$2')
   .replace(/(\d{3})(\d)/, '$1-$2')
   .replace(/(\d{3})(\d{1,2})/, '$1-$2')
   .replace(/(-\d{3})\d+?$/, '$1')
}