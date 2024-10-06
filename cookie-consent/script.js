const cookie = document.getElementById('cookie-popup')
const btnClose = document.getElementById('cookie-close')
const btnAccept = document.getElementById('cookie-accept')

btnClose.addEventListener('click', () => closeCookie())

btnAccept.addEventListener('click', () => {
    // save cookies...
    document.cookie = "user=joao;path=/;SameSite=Strict;Secure"
    closeCookie()
})

function closeCookie () {
    cookie.classList.remove('show')
}

function verifyCookie () {
    if (!document.cookie) {
        cookie.classList.add('show')
    }
}

verifyCookie()