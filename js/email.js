class email {
    constructor(a) {
        this.email = a
    }
}

const emails = []
let mail
let emailad
let correo = document.querySelector('#femail')

let formE = document.querySelector('#form-news')
formE.addEventListener('submit', sendf)
function sendf(e) {
    if(correo.value != '') {
        e.preventDefault()
        e.target
        emailad = new email(formE.children[1].value)
        emails.push(emailad)
        mail = `Mail: ${emailad.email}`
        console.log(emailad)
        console.log(emails)
        console.log(mail)
        console.log(correo.value)

        correo.value = ''

        //Sweet alert
        swal({
            title: "Send!",
            text: "Your mail was sended!",
            icon: "success",
            button: "ok",
        });
    } else {
        e.preventDefault()

        //Sweet alert
        swal({
            title: "ERROR",
            text: "Your mail wasn't send!",
            icon: "error",
            button: "ok",
        });
    }
}