const scriptURL = 'https://script.google.com/macros/s/AKfycbzTlW2BLhogOdWemd-2-BAkuXxTdELKVO0J4ov2T_Gwn0uSvZrU_pW2RZPtZ8kJ2g-X/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})