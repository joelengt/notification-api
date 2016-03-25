var btnNotificacion = document.getElementById("btnNotificacion")
var btnPermiso = document.getElementById("btnPermiso")

// Simulando el traer un dato del Server o un modulo

function Server () {
    
    var Notice = {
      title: "Saludos New Message",
      options: {
        icon: "http://cursos.cromlu.com/image/cromlu.png",
        body: "Notificación de prueba",
        sound: "audio/alert.mp3",
        vibrate: [200, 100, 200]},
    }

   return Notice
}


// var titulo = "Nuevo Mensaje"

// var opciones = {
//     icon: "http://cursos.cromlu.com/image/cromlu.png",
//     body: "Notificación de prueba",
//     sound: "audio/alert.mp3",
//     vibrate: [200, 100, 200]
// }

function permiso(){
  Notification.requestPermission();
  // Esta funcion concede el permiso a las Notificaciones HTML
}

// En cuanto a los permisos, tenemos tres resultados:

// default: Cuando el usuario aún no establece el permiso.
// granted: Cuando el usuario concede el permiso.
// denied: Cuando el usuario bloquea el permiso.


function mostrarNotificacion() {  
   if(Notification) {

        var Notice = Server()

      if (Notification.permission == "granted"){
         var n = new Notification(Notice.title, Notice.options);

         // n.soundw
         // n.vibrate

         n.addEventListener("click", function (event){
            event.preventDefault();
            window.open("http://google.com","_blank")
            n.close();
         })

      }

      else if(Notification.permission == "default") {
         alert("Primero da los permisos de notificación");
      }
      else if(Notification.permission == "denied"){
         alert("Bloqueaste los permisos de notificación");
      }
      else {
        alert("Tu navegador aun NO soporta Notificaciones :(");
      }
    }
};


btnPermiso.addEventListener("click", permiso);  
btnNotificacion.addEventListener("click", mostrarNotificacion);  



// Para cerrar nuestra notificación podemos usar:

// n.close();  

window.addEventListener("load", main);

function main(){
  permiso()
}