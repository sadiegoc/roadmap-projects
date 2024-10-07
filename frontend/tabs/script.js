const tabsItem = document.querySelectorAll('.tab-item')
const contentsItem = document.querySelectorAll('.content-item')

tabsItem.forEach(tabItem => {
    tabItem.addEventListener('click', (event) => {
        clearActives()

        const target = event.target.getAttribute("target")
        const content = document.getElementById(target)

        event.target.classList.add('active')
        content.classList.add('active')
    })
})

function clearActives () {
    tabsItem.forEach(tabItem => tabItem.classList.remove('active'))
    contentsItem.forEach(tabItem => tabItem.classList.remove('active'))
}