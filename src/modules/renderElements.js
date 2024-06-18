import { checkID } from "../services/checkID.js"

// Profile
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
const coloredBar = document.querySelector('.colored-bar')


export function renderElements(element) {
  // Resetting elements
  historyInfo.innerHTML = ''
  checksDiv.forEach((e) => e.innerHTML = '')

  // Rendering Profile Information
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
  const totalFidelity = element.loyaltyCard.totalCuts
  for (let i = 0; i < totalFidelity; i++) {
    checksDiv[i].innerHTML = `<img src="./src/assets/PinCheck.png">`
  }

  // checksDiv[9].innerHTML
}


