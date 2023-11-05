


const prac1 = document.querySelector('#prac_1');
const prac2 = document.querySelector('#prac_2');
const prac3 = document.querySelector('#prac_3');
const prac4 = document.querySelector('#prac_4');
const prac5 = document.querySelector('#prac_5');
const prac6 = document.querySelector('#prac_6');

function primeraPractica() {
    let name1 = 'Maopcionwell Wright';
    let name2 = 'Rajá Villarreal';
    let name3 = 'Helen Richards';
    let phone1 = '(0191) 719 6495';
    let phone2 = '0866 398 2895';
    let phone3 = '0800 1111';
    let email1 = 'Curabitur.egestas.nunc@nonummyac.co.uk';
    let email2 = 'posuere.vulputate@sed.com';
    let email3 = 'libero@convallis.edu';

    document.querySelector("#con_fond_1").style.backgroundColor = "#161616";

    document.querySelector('#consola1_1').textContent = `name:${name1}/ phone:${phone1}/ email:${email1}`;
    document.querySelector('#consola1_2').textContent = `name:${name2}/ phone:${phone2}/ email:${email2}`;
    document.querySelector('#consola1_3').textContent = `name:${name3}/ phone:${phone3}/ email:${email3}`;
    /*
    console.log(`name:${name1}/ phone:${phone1}/ email:${email1}`);
    console.log(`name:${name2}/ phone:${phone2}/ email:${email2}`);
    console.log(`name:${name3}/ phone:${phone3}/ email:${email3}`);
    */
}
prac1.addEventListener("click", primeraPractica);

function segundaPractica() {
    let contacts = [{
        name: "Maopcionwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
        }, {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
        }, {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
        }, {
        name: "Maisie Haley ",
        phone: "0913 531 3030",
        email: "risus.Quisque@urna.ca."
        }];

        document.querySelector("#con_fond_2").style.backgroundColor = "#161616";

        for(let cont of contacts){
            const objeto = document.createElement('p');
            objeto.textContent = `name::${cont.name} phone::${cont.phone} email::${cont.email}`;
            document.querySelector("#consl_2").appendChild(objeto);
            console.log(`name::${cont.name} phone::${cont.phone} email::${cont.email}`);
        }
}
prac2.addEventListener("click", segundaPractica);

function terceraPractica() {
    let contacts = [{
        name: "Maopcionwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
        }, {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
        }, {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
        }];
        
        contacts.push({
            name: prompt("nombre"),
            phone: prompt("telefono"),
            email: prompt("correo electronico")
        })
        
        let last = contacts.length - 1;
        
        console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
        console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);

        document.querySelector("#consola3_1").textContent = 
        `${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`;
        document.querySelector("#consola3_2").textContent = 
        `${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`;

        document.querySelector("#con_fond_3").style.backgroundColor = "#161616";
}
prac3.addEventListener("click", terceraPractica);

let contactosPract4 = [{
    name: "Maopcionwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

function cuartaPractica() {
    let contacts = contactosPract4;
    
    let last = contacts.length - 1;

    let opcion = prompt("opciones: mostrar primero(primero)\n mostrar ultimo(ultimo)\n agregar nuevo contacto(agregar).")

    switch(opcion) {
        case 'primero':
            console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
            document.querySelector("#consola4").textContent = 
        `${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`;
            brack;
        case 'ultimo':
            console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
            document.querySelector("#consola4").textContent = 
        `${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`;
            brack;
        case 'agregar':
            let nombre = prompt("nombre");
            let telefono = prompt("telefono");
            let correo = prompt("correo electronico");
            if(nombre !== '' && telefono !== '' && correo !== '') {
                contactosPract4.push({
                    name: nombre,
                    phone: telefono,
                    email: correo
                });
            }else {
                alert("falto llenar algun campo")
            }
            break;
        
        default:
            alert("opcion no valida.")     
    };
    document.querySelector("#con_fond_4").style.backgroundColor = "#161616";
}
prac4.addEventListener("click", cuartaPractica);

let contactosPract5 = [{
    name: "Maopcionwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];


function quintaPractica() {
    let contacts = contactosPract5;
    let salir = true;
    let last = contacts.length - 1;

    do{
        let opcion = prompt("opciones: \nmostrar primero(primero)\nmostrar ultimo(ultimo)\nagregar nuevo contacto(agregar)\nmostrar todo(todo)\nsalir(salir)\n\ntiene que salir para ver los que muestra")

    switch(opcion) {
        case 'primero':
            console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
            document.querySelector("#consola5").textContent = 
        `${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`;
            break;
        case 'ultimo':
            console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
            document.querySelector("#consola5").textContent = 
        `${contactosPract5[last].name} / ${contactosPract5[last].phone} / ${contactosPract5[last].email}`;
            break;
        case 'agregar':
            let nombre = prompt("nombre");
            let telefono = prompt("telefono");
            let correo = prompt("correo electronico");
            if(nombre !== '' && telefono !== '' && correo !== '') {
                contactosPract5.push({
                    name: nombre,
                    phone: telefono,
                    email: correo
                });
            }else {
                alert("falto llenar algun campo")
            }
            break;
            case 'todo':
                for(let cont of contactosPract5){
                    console.log(`name: ${cont.name} phone: ${cont.phone} email: ${cont.email}`);
                    const objeto = document.createElement('p');
                    objeto.textContent = `name::${cont.name} phone::${cont.phone} email::${cont.email}`;
                    document.querySelector("#con_5").appendChild(objeto);
                }
                break;
            case 'salir':
                salir = false;
                break;
        default:
            alert("opcion no valida.")     
    };
    }while(salir == true);

    
    document.querySelector("#con_fond_5").style.backgroundColor = "#161616";
}
prac5.addEventListener("click", quintaPractica);


// lab 6

function sextaPractica() {
    let contacts = [{
        nombre: "Maopcionwell Wright",
        telefono: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
        }, {
        nombre: "Raja Villarreal",
        telefono: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
        }, {
        nombre: "Helen Richards",
        telefono: "0800 1111",
        email: "libero@convallis.edu"
        }];
    
    let opcion = true;
    
    while (opcion) {
        opcion = prompt("Opciones:\n1. Mostrar primer contacto\n2. Mostrar último contacto\n3. Mostrar todo\n4. Agregar\n5. Salir");
    
        switch (opcion) {
            case "1":
                mostrarC(contacts, 0);
                break;
            case "2":
                let mostrarUltimoc = contacts.length - 1;
                console.log(`${contacts[mostrarUltimoc].nombre} / ${contacts[mostrarUltimoc].telefono} / ${contacts[mostrarUltimoc].email}`);
                break;
            case "3":
                mostrarT(contacts);
                break;
            case "4":
                let nuevoNombre = prompt("nombre.");
                let nuevotel = prompt("telefono");
                let nuevoEmail = prompt("correo electrónico");
                nuevo(contacts, nuevoNombre, nuevotel, nuevoEmail);
                break;
            case "5":
                opcion = false;
                break;
            default:
                console.log("opcion invalida.");
        }
    }
    
    function mostrarC(contacts, i) {
        if (contacts instanceof Array && i >= 0 && i < contacts.length) {
            console.log(`${contacts[i].nombre} / ${contacts[i].telefono} / ${contacts[i].email}`);
        } else {
            console.log("Error: Índice de contacto inválido.");
        }
    }
    
    function mostrarT(contacts) {
        if (contacts instanceof Array) {
            for (let i = 0; i < contacts.length; i++) {
                console.log(`${contacts[i].nombre} / ${contacts[i].telefono} / ${contacts[i].email}`);
            }
        } else {
            console.log("Error: La lista de contactos es inválida.");
        }
    }
    
    function nuevo(contacts, nombre, telefono, email) {
        if (contacts instanceof Array && nombre && telefono && email) {
            let nuevoContacto = {
                nombre: nombre,
                telefono: telefono,
                email: email
            };
            contacts.push(nuevoContacto);
        } else {
            console.log("porfacor llenar todos los datos.");
        }
    }
}


//lab 7

function sextaPractica() {
    let contacts = [{
        nombre: "Maopcionwell Wright",
        telefono: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
        }, {
        nombre: "Raja Villarreal",
        telefono: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
        }, {
        nombre: "Helen Richards",
        telefono: "0800 1111",
        email: "libero@convallis.edu"
        }];
    
    let opcion = true;
    
    while (opcion) {
        opcion = prompt("Opciones:\n1. Mostrar primer contacto\n2. Mostrar último contacto\n3. Mostrar todo\n4. Agregar\n5. Ordenar\n6. Salir");
    
        switch (opcion) {
            case "1":
                mostrarC(contacts, 0);
                break;
            case "2":
                let mostrarUltimoc = contacts.length - 1;
                console.log(`${contacts[mostrarUltimoc].nombre} / ${contacts[mostrarUltimoc].telefono} / ${contacts[mostrarUltimoc].email}`);
                break;
            case "3":
                mostrarT(contacts);
                break;
            case "4":
                let nuevoNombre = prompt("nombre.");
                let nuevotel = prompt("telefono");
                let nuevoEmail = prompt("correo electrónico");
                nuevo(contacts, nuevoNombre, nuevotel, nuevoEmail);
                break;
            case "5":
                let ordernar = prompt("Opciones:\n1. Por nombre\n2. Por teléfono\n3. Por correo electrónico");
                switch (ordernar) {
                    case "1":
                        ordenarcontactos("nombre");
                        mostrarT(contacts);
                        break;
                    case "2":
                        ordenarcontactos("telefono");
                        mostrarT(contacts);
                        break;
                    case "3":
                        ordenarcontactos("email");
                        mostrarT(contacts);
                        break;
                    default:
                        console.log("opcion invalida.");
                }
                break;
            case "6":
                opcion = false;
                break;
            default:
                console.log("opcion invalida.");
        }
    }
    
    function mostrarC(contacts, i) {
        if (contacts instanceof Array && i >= 0 && i < contacts.length) {
            console.log(`${contacts[i].nombre} / ${contacts[i].telefono} / ${contacts[i].email}`);
        } else {
            console.log("Error: Índice de contacto inválido.");
        }
    }
    
    function mostrarT(contacts) {
        if (contacts instanceof Array) {
            for (let i = 0; i < contacts.length; i++) {
                console.log(`${contacts[i].nombre} / ${contacts[i].telefono} / ${contacts[i].email}`);
            }
        } else {
            console.log("Error: La lista de contactos es inválida.");
        }
    }
    
    function nuevo(contacts, nombre, telefono, email) {
        if (contacts instanceof Array && nombre && telefono && email) {
            let nuevoContacto = {
                nombre: nombre,
                telefono: telefono,
                email: email
            };
            contacts.push(nuevoContacto);
        } else {
            console.log("porfacor llenar todos los datos.");
        }
    }
    function ordenarcontactos(property) {
        contacts.sort((a, b) => {
            if (a[property] > b[property]) return 1;
            if (a[property] < b[property]) return -1;
            return 0;
    });
    }
}
















// practica lista de tareas

const agregarTarea = document.querySelector("#agregar_tarea");
const nuevaTarea = document.querySelector("#lista_tareas");
const campoTitulo = document.querySelector("#titulo");
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


function agregar() {
    if(campoTitulo.value !== '') {
        const tareaId = `${Date.now()}`;
        const tarea = document.createElement("p");
        tarea.classList.add("tarea");
        tarea.id = tareaId;
        nuevaTarea.appendChild(tarea);
        const titulo = campoTitulo.value;

        const fecha = new Date();
        const año = fecha.getFullYear();
        const mes = fecha.getMonth();
        const dia = fecha.getDate();
        tarea.textContent = `${dia}-${meses[mes]}-${año}:: ${titulo}`;
        campoTitulo.value = '';
        campoTitulo.focus();

        tarea.addEventListener("click", () => {
            tarea.parentNode.removeChild(tarea);
        });
        tarea.addEventListener("mousemove", () => {
            tarea.style.backgroundColor = "#00FFCA";
            tarea.style.color = "#000000"
            tarea.style.teopciontDecoration = "line-through";
        });
        tarea.addEventListener("mouseout", () => {
            tarea.style.backgroundColor = "#161616";
            tarea.style.color = "#FFFFFF"
            tarea.style.teopciontDecoration = "none";
        });
        tarea.style.cursor = "pointer";
    }
    else {
        campoTitulo.focus();
    }
}
agregarTarea.addEventListener("click", agregar);
campoTitulo.addEventListener("keydown", (evento) => {
    if(evento.key === "Enter") {
        agregar();
    }
});
