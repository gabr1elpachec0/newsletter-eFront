const sendForm = () => {
  const getUserName = document.getElementById('userName').value
  const getEmail    = document.getElementById('email').value

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (getUserName && getEmail && emailRegex.test(getEmail)) {
    const message = '<p id="modalMessage">E-mail cadastrado com <span id="successSpan">sucesso</span>!</p>'

    const modal = document.getElementById('modal')
    const modalOverlay = document.getElementById('modalOverlay');

    modal.insertAdjacentHTML('beforeend', message)
    modal.insertAdjacentHTML('beforeend', `<button type="button" id="closeSuccessModal" onclick="closeModal()">Fechar</button>`)
    modal.style.display = 'flex'
    modalOverlay.style.display = 'flex'

    console.log('Nome do usuário: ' + getUserName)
    console.log('Email do usuário: ' + getEmail)

  } else {
    const message = '<p id="modalMessage">E-mail <span id="errorSpan">não</span> cadastrado!</p>'

    const modal = document.getElementById('modal')
    const modalOverlay = document.getElementById('modalOverlay');
    modal.insertAdjacentHTML('beforeend', message)
    modal.insertAdjacentHTML('beforeend', `<button type="button" id="closeErrorModal" onclick="closeModal()">Fechar</button>`)
    modal.style.display = 'flex'
    modalOverlay.style.display = 'flex'
  }
  document.getElementById('newsletterSubscribe').reset()
}

const closeModal = () => {
  const modal = document.getElementById('modal')
  const modalOverlay = document.getElementById('modalOverlay');

  modal.style.display = 'none'
  modalOverlay.style.display = 'none'
  modal.innerHTML = ''

}

