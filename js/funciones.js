function Mostrar1() {
    let a = document.getElementById('nom').value;
    let b = document.getElementById('correo').value;
    let c = document.getElementById('telefono').value;
    var edad = parseInt(document.getElementById('edad').value);
    let d = document.getElementById('carta').value;

    if (a.length < 3) {
        alert('Error..debe ingresar un nombre válido');
        document.getElementById('nom').value = "";
        document.getElementById('nom').focus();
        return;
    }

    if (b.length <= 0) {
        alert('Error..debe ingresar un correo válido');
        document.getElementById('correo').value = "";
        document.getElementById('correo').focus();
        return;
    }

    if (isNaN(edad) || edad < 18 || edad > 99) {
        alert('Debe ser mayor de 18 y menor de 99 años para usar esta función');
        document.getElementById('edad').value = "";
        document.getElementById('edad').focus();
        return;
    }

    if (c.length < 9) {
        alert('Error..debe ingresar un número telefónico válido');
        document.getElementById('telefono').value = "";
        document.getElementById('telefono').focus();
        return;
    }

    if (d.length < 30) {
        alert('Su comentario debe tener al menos 30 caracteres, por favor detalle un problema real');
        document.getElementById('carta').value = "";
        document.getElementById('carta').focus();
        return;
    }

    alert('Muchas gracias don/doña ' + a + '. Pronto le mandaremos una respuesta al correo ' + b + 
        '. Si por algún motivo no le podemos mandar correo, lo contactaremos al teléfono +56 ' + c);
    document.getElementById('nom').value = "";
    document.getElementById('correo').value = "";
    document.getElementById('telefono').value = "";
    document.getElementById('edad').value = "";
    document.getElementById('carta').value = "";
    document.getElementById('nom').focus();
}


function Ruleta() {
    let numeroAleatorio = Math.floor(Math.random() * 12) + 1;
    let mensaje= '';
    const Ruedas = {
        1: 'Rueda F1 amarilla.',
        2: 'Rueda F1 blanca con diseño y llanta.',
        3: 'Rueda F1 amarilla neon.',
        4: 'Rueda F1 roja con llanta.',
        5: 'Rueda F1 azul.',
        6: 'Rueda F1 verde.',
        7: 'Rueda F1 blanca.',
        8: 'Rueda F1 roja.',
        9: 'Rueda F1 morada con llanta.',
        10: 'Rueda F1 naranja con llanta.',
        11: 'Rueda F1 azul con llanta.',
        12: 'Rueda F1 amarilla con llanta.',
        };
        if (Ruedas[numeroAleatorio]) {
        mensaje = Ruedas[numeroAleatorio];
        }
        alert('Usted debería comprar la ' + mensaje);
}

function Mostrar2() {
    let a = document.getElementById('nom').value;
    let b = document.getElementById('correo').value;
    let c = document.getElementById('telefono').value;
    var edad = document.getElementById('edad').value.trim();
        
    if (a.length < 3 || b.length <= 0 || edad === "" || c.length < 9) {
        alert('Todos los campos son obligatorios y deben estar completos');
    } else {
        if (parseInt(edad) <= 18) {
            alert('Debe ser mayor de 18 años para usar esta función');
            document.getElementById('edad').value = "";
            document.getElementById('edad').focus();
        } else {
            alert('Muchas gracias don/doña ' + a + '. Pronto le mandaremos mensajes con actualizaciones al correo ' + b + 
            '. Si por algún motivo no le podemos mandar correos, le mandaremos actualizaciones de nuestros productos vía mensaje al teléfono +56 ' + c);
            document.getElementById('nom').value = "";
            document.getElementById('correo').value = "";
            document.getElementById('telefono').value = "";
            document.getElementById('edad').value = "";
            document.getElementById('nom').focus();
        }
    }
}


function mostrarRuedas(){
    let url='http://localhost:3300/Ruedas';
    fetch(url)
    .then(response => response.json())
    .then(data => mostrarRueditas(data))
    .catch(error => console.log(error))

    const mostrarRueditas=(data)=>{
        console.log(data)
        let texto=""
        for(var i=0;i<data.length;i++){
            texto+=`<tr>
                <td>${data[i].id}</td>
                <td>${data[i].nombre}</td>
                <td>${data[i].tipo}</td>
                <td>${data[i].color}</td>
                </tr>`
        }
        document.getElementById('Ruedas').innerHTML=texto;
    }
}

function buscarTipo(){
    let url='http://localhost:3300/Ruedas';
    let tipo=document.getElementById('tipo').value; 
    fetch(url)
    .then(response => response.json())
    .then(data => buscarRueditas(data))
    .catch(error => console.log(error))

    const buscarRueditas=(data)=>{
        console.log(data)
        let texto=""
        if (document.getElementById('tipo').selectedIndex==0){
            mostrarRuedas();
        }
        else{

            for(var i=0;i<data.length;i++){
                if (tipo==data[i].tipo)
                {
                    texto+=`<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].nombre}</td>
                    <td>${data[i].tipo}</td>
                    <td>${data[i].color}</td>
                    </tr>`
    
                }
            }
            document.getElementById('Ruedas').innerHTML=texto;
        }
    }
}

function mostrarRadios() {
    $.get("https://api.boostr.cl/radios.json", function(data, status){
        if(status === 'success') {
            $("#data").empty(); // Limpiar el contenido anterior

            data.data.forEach(radio => {
                let fila = "<tr>" +
                    "<td>" + radio.name + "</td>" +
                    "<td><a href='" + radio.url + "' target='_blank'>Ver radio</a></td>" +
                    "</tr>";
                $("#data").append(fila);
            });
        } else {
            $("#data").html("<tr><td colspan='3'>Error al cargar los datos.</td></tr>");
        }
    });
}