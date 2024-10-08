const itemsDropdown = document.querySelectorAll('.item-dropdown')

itemsDropdown.forEach(item => {
    const parentNode = item.parentNode.parentNode
    if (parentNode.id) {
        item.addEventListener('click', (event) => {
            const itemText = event.target.innerText
            parentNode.children[0].children[0].innerText = itemText

            clearActives(parentNode.id)
            event.target.classList.add('active')
        })
    }
})

function clearActives (id) {
    itemsDropdown.forEach(item => {
        if (item.parentNode.parentNode.id === id) {
            item.classList.remove('active')
        }
    })
}