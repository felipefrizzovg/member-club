import { checkID } from "../services/checkID.js"

// Profile
const profileImg = document.querySelector('.profile-img')
const clientName = document.querySelector('.profile-info h1')
const clientSince = document.querySelector('.profile-info p')

// history
const historyHeaderCuts = document.querySelector('.history-header p')
const historyInfo = document.querySelector('.history-info')

// Fidelity
const fidelityId = document.querySelector('.id p')
const checksDiv = document.querySelectorAll('.checks')
const checksContainer = document.querySelector('.checks-container')

// Remaining Cuts
const numberOfCutsRemaining = document.querySelector('.remaining-cuts-info h2 strong')
const totalCuts = document.querySelector('.progress p')
const standardBar = document.querySelector('.standard-bar')
const coloredBar = document.querySelector('.colored-bar')

// Modal
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.close')


export function renderElements(element) {
  // Resetting elements
  historyInfo.innerHTML = ''
  checksContainer.innerHTML = ''
  // fidelityId.innerHTML = 'ID: '

  // Rendering Profile Information
  if (element.name === "Natália Miranda") {
    profileImg.innerHTML = `<img src="./src/assets/nataliaMiranda.png" alt="Foto de perfil">`
  } else if (element.name === "Capitão Nascimento") {
    profileImg.innerHTML = `<img src="./src/assets/capNascimento.jpg" alt="Foto de perfil"></img>`
  } else {
    profileImg.innerHTML = `<img src="./src/assets/sansao.jpg" alt="Foto de perfil">`
  }

  clientName.innerHTML = `${element.name}`
  clientSince.innerHTML = `Cliente desde ${element.clientSince}`

  // Rendering History Information
  historyHeaderCuts.innerHTML = `${element.appointmentHistory.length} ${element.appointmentHistory.length > 1 ? 'cortes' : 'corte'}`
  element.appointmentHistory.forEach((item) => {
    const historyItem = document.createElement('div')
    historyItem.setAttribute('class', 'history-item')
    historyItem.innerHTML = `<div class="date">
            <h3>${item.date}</h3>
            <p>${item.time}</p>
          </div>
          <div class="history-logo">
            <img src="./src/assets/icons/SealCheck.svg" alt="Icone de check">
          </div>
        </div>`

    
    historyInfo.append(historyItem)
    // historyCutsDate.innerHTML = `${item.date}`
    // historyCutsHour.innerHTML = `${item.time}`
  })

  // Rendering fidelity information
  // Showing ID
  fidelityId.innerHTML = `ID: ${element.id}`

  // How many checks will there be
  const totalFidelity = element.loyaltyCard.totalCuts
  // for (let i = 0; i < totalFidelity; i++) {
  //   checksDiv[i].innerHTML = `<img src="./src/assets/PinCheck.png">`
  // }

  // checksDiv[element.loyaltyCard.cutsNeeded - 1].innerHTML = `<img src="./src/assets/icons/Gift-Solid.svg">`

  // Letting number of containers be fluid
  for (let i = 0; i < element.loyaltyCard.cutsNeeded; i++) {
    if(i < totalFidelity) {
      checksContainer.innerHTML += `<div class="checks"><img src="./src/assets/PinCheck.png"></div>`
    } else if (element.loyaltyCard.cutsNeeded - 1 === i) {
      checksContainer.innerHTML += `<div class="checks"><img src="./src/assets/icons/Gift-Solid.svg"></div>`
    } else {
      checksContainer.innerHTML += `<div class="checks"></div>`
    }

    
  }
  checksDiv[element.loyaltyCard.cutsNeeded - 1].innerHTML = `<img src="./src/assets/icons/Gift-Solid.svg">`

  // Remaining cuts
  numberOfCutsRemaining.innerHTML = `${element.loyaltyCard.cutsRemaining}`
  totalCuts.innerHTML = `${element.loyaltyCard.totalCuts} de ${element.loyaltyCard.cutsNeeded}`

  const width = (element.loyaltyCard.cutsNeeded * 10 - element.loyaltyCard.cutsRemaining * 10)
  coloredBar.style.width = `${width}%`


  // Making modal
  if (element.loyaltyCard.totalCuts === element.loyaltyCard.cutsNeeded) {
    modal.style.display = 'flex'
  }

  // Closing modal
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none'
  })

  // Closing modal on click outside
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none'
    }
  })
}