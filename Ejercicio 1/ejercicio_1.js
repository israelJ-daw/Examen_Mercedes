window.addEventListener("load", ()=>{
    iniciar();
});


const jsonData =  [{"clase_pais":"usa","ciudad_h2":"New York,NY","detalle_precio_total":"1,899","detalle_num_noches":7,"precio_noche":275,"ruta_imagen":"/photos/newyork.jpg","pie_imagen":"Puente Brooklyn"},
    {"clase_pais":"paris","ciudad_h2":"Paris,Francia","detalle_precio_total":"1,499","detalle_num_noches":5,"precio_noche":300,"ruta_imagen":"/photos/paris.jpg","pie_imagen":"Notre Dame de Paris"},
    {"clase_pais":"uk","ciudad_h2":"Londres,UK","detalle_precio_total":"2,199","detalle_num_noches":5,"precio_noche":440,"ruta_imagen":"/photos/london.jpg","pie_imagen":"Torre de Londres"}]

    
    

function iniciar(){

    var mostrar = document.getElementById ("Mostrar");

    jsonData.forEach(item =>{

        var div1 = document.createElement ("div");

        var ul1 = document.createElement ("ul");

        var li1 = document.createElement ("li");
        li1.classList.add ("viaje-usa");

        var titulo = document.createElement ("h2");
        titulo.textContent = item.ciudad_h2;

        var precio = document.createElement ("span");
        precio.textContent = item.detalle_precio_total;
        precio.classList.add("detalle");

        var por = document.createElement("span");
        por.textContent = " por ";
        por.classList.add("detalle");

        var noches = document.createElement("span");
        noches.textContent = " noches "
        noches.classList.add("detalle");

        var n_noches = document.createElement ("span");
        n_noches.textContent = item.detalle_num_noches;
        n_noches.classList.add("detalle");

        var boton = document.createElement("button");
        boton.textContent = "Reservalo YA!" ; 
        boton.classList.add("reserva");

        var ul2 = document.createElement ("ul");
        ul2.classList.add ("fotos");

        var li2 = document.createElement ("li");

        var img = document.createElement ("img");
        img.src = item.ruta_imagen;

        var span2 = document.createElement("span");
        span2.textContent = item.pie_imagen;


        li1.appendChild(titulo);

        li1.appendChild(precio);

        precio.appendChild(por);

        por.appendChild(n_noches);

        por.appendChild(noches);

        li2.appendChild(img);

        li2.appendChild(span2);

        ul2.appendChild(li2);

        ul1.appendChild(ul2);

        li1.appendChild(boton);

        ul1.appendChild(li1);

        div1.appendChild(ul1);

        mostrar.appendChild(div1);


            
        mostrar.addEventListener("click" , ()=>{

            if (mostrar.textContent=="OCULTAR VIAJES") {
                    div1.remove();
                 mostrar.textContent= "MOSTRAR VIAJES";

              //no le encuentro solucion para que me muestre los viajes de nuevo, los elimino
              //pero cuando le doy a mostrar viaje no me hace nada, se tiene que recarcar la pagina    
            } else {
                jsonData.forEach(item=>{
                    mostrar.appendChild(div1);
                    mostrar.textContent= "MOSTRAR VIAJES";
                 });
            }
        });

        /*Esto de mouseover lo he copido de intener de un foro te dejo en enlace aqui
        https://stackoverflow.com/questions/8318591/javascript-addeventlistener-using-to-create-a-mouseover-effect */

        img.addEventListener("mouseover", ()=>{
            jsonData.forEach(item=>{
                img.classList.add("destacado");
            }) 
        })

        

});


};

