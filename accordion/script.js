const faqs = document.querySelectorAll('.faq')
const questions = document.querySelectorAll('.question')
const contents = document.querySelectorAll('.content')

questions.forEach(question => {
    question.addEventListener('click', (event) => {
        const content = event.target.nextElementSibling
        if (content && content.classList.contains('content'))
            content.classList.toggle('show')
    })
})