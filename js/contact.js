class contact {
    constructor(a) {
        this.name = a.name
        this.lastName = a.lastName
        this.email = a.email
        this.phone = a.phone
        this.comment = a.comment
    }
}

const contactusers = []
let contactuser
let contactuse

let cfirstName = document.getElementById('c-first')
let clastName = document.getElementById('c-last')
let cemail = document.getElementById('c-email')
let cphone = document.getElementById('c-phone')
let ccomment = document.getElementById('c-comment')

let form = document.getElementById('form-contact')
form.addEventListener('submit', sendff)
function sendff(e) {
    e.preventDefault()
    contactuser = new contact({name: cfirstName.value, lastName: clastName.value, email:cemail.value, phone: cphone.value, comment: ccomment.value })
    contactusers.push(contactuser)
    contactuse = `Name: ${contactuser.name} - LastName: ${contactuser.lastName} - Email: ${contactuser.email} - Phone: ${contactuser.phone} - Comment: ${contactuser.comment}`
    swal({
        title: "SEND",
        text: "Your data was sended",
        icon: "success",
        button: "ok!",
      });

    console.log(contactuser)
    console.log(contactusers)
    console.log(contactuse)

    cfirstName.value = ''
    clastName.value = ''
    cemail.value = ''
    cphone.value = ''
    ccomment.value = ''

    let contactJson = JSON.stringify(contactusers)
    localStorage.setItem('contacts', contactJson)
    console.log(localStorage.getItem('contacts'))
}

