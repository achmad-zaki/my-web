const myFunction = () => {
    const inputName = document.getElementById('input-form').value
    if(inputName === '') {
        document.getElementById('nametag').innerHTML = "Nama jangan kosong beb"
        const imageShow = document.querySelector('.image')
        imageShow.classList.remove('show')
    } else {
        console.log('ada')
        const imageShow = document.querySelector('.image')
        imageShow.classList.add('show')
        document.getElementById('nametag').innerHTML = "I Love You " + inputName + " 💖"
    }
}