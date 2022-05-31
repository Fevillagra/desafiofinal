document.addEventListener('DOMContentLoaded', () => {
    let name = localStorage.getItem('name')
    if(name == null) {
        namae = prompt('Enter your name, please')
        localStorage.setItem('name', namae)
        swal({
            title: "Welcome " + localStorage.getItem('name') ,
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

function r () {
   ( localStorage.getItem('name') != '' ) ? console.log( conection = new users({name:localStorage.getItem('name'), lastConect: new Date(), })) : console.log('') ;
    nusers.push(conection)

}
r()

