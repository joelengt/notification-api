var btnPermiso = document.querySelector("#btnPermiso");
var btnNotificacion = document.querySelector("#btnNotificacion");

var titulo = "Tines un Mensaje Nuevo";
var options = {
  body: "Una Hermosa Notificacion :3",
  icon: "http://cursos.cromlu.com/image/cromlu.png"
}

function DarPermiso() {
   Notification.requestPermission()
}

function EjecutarNotificacion() {

   if(Notification.permission == "granted"){
      var n = new Notification(titulo, options);

      n.addEventListener("click", function (event){
          event.preventDefault();
          window.open('http://www.mozilla.org', '_blank');
          n.close();        
      })

   }
   else if(Notification.permission === "default"){
    console.log("Primero Activa las Notificaciones");
   }
   else if(Notification.permission === "denied"){
    console.log("Desactivaste la Notificaciones");
   }
   else{
    console.log("Tu Navegador No soporta las Notificaciones Aun.. :(");
   }

}

btnPermiso.addEventListener("click", DarPermiso)
btnNotificacion.addEventListener("click", EjecutarNotificacion)

window.addEventListener("load", main)

function main() {
  DarPermiso()
}




// Notification.requestPermission();
// var options = {body:"Hola saludos new message", icon:"http://cursos.cromlu.com/image/cromlu.png"};
// var n = new Notification('Nuevo mensaje', options)
// n.addEventListener("click", function (event){
//     event.preventDefault();
//      window.open("http://youtube.com","_blank")

// })