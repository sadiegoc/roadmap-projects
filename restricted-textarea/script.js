const textarea = document.getElementById('textarea')
const count = document.getElementById('count')

textarea.addEventListener('input', () => {
    count.innerHTML = `${textarea.value.length} / 250`

    if (textarea.value.length > 250) {
        textarea.classList.add('warning')
        count.classList.add('warning')
    } else {
        textarea.classList.remove('warning')
        count.classList.remove('warning')
    }
})