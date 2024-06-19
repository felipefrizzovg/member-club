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

// Remaining Cuts
const numberOfCutsRemaining = document.querySelector('.remaining-cuts-info h2 strong')
const totalCuts = document.querySelector('.progress p')
const standardBar = document.querySelector('.standard-bar')


export function renderElements(element) {
  // Resetting elements
  historyInfo.innerHTML = ''
  checksDiv.forEach((e) => e.innerHTML = '')
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
  for (let i = 0; i < totalFidelity; i++) {
    checksDiv[i].innerHTML = `<img src="./src/assets/PinCheck.png">`
  }

  // checksDiv[9].innerHTML


  // Remaining cuts
  numberOfCutsRemaining.innerHTML = `${element.loyaltyCard.cutsRemaining}`
  totalCuts.innerHTML = `${element.loyaltyCard.totalCuts} de ${element.loyaltyCard.cutsNeeded}`

  const coloredBar = document.createElement('div')
  coloredBar.setAttribute('class', 'colored-bar')
  const width = (element.cutsNeeded * 10 - element.cutsRemaining * 10)
  coloredBar.style.width = `${width}%`

  standardBar.append(coloredBar)
}


