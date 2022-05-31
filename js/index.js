document.addEventListener('DOMContentLoaded', () => {
    let name = localStorage.getItem('name')
    if((name == null) || (name == '')) {
        name = prompt('Enter your name, please')
        localStorage.setItem('name', name)
        swal({
            title: "Welcome",
            text: "To the most bigger heatlhy store",
            icon: "success",
            button: "ok",
          })
    } else {
        swal({
            title: "Welcome " + localStorage.getItem('name') ,
            text: "To the most bigger heatlhy store",
            icon: "success",
            button: "ok",
          })
    }
})

class users {
    constructor(a) {
        this.name = a.name
        this.lastConect = a.lastConect
    }
}

nusers = []
let conection 
function r () {
   ( localStorage.getItem('name') != '' ) ? console.log( conection = new users({name:localStorage.getItem('name'), lastConect: new Date(), })) : console.log('') ;
    nusers.push(conection)

}
r()

