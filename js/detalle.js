
function CambiarTexto(id){
    $('#divTituloComoComprar').removeClass("active");
    $('#divTituloEnvios').removeClass("active");
    $('#divTituloFormas').removeClass("active");

    $('#divComoComprar').css('display','none')
    $('#divEnvios').css('display','none')
    $('#divFormas').css('display','none')


    if (id == '1'){
        $('#divComoComprar').css('display','block')
        $('#divTituloComoComprar').addClass("active");
    }
    if (id == '2'){
        $('#divEnvios').css('display','block')
        $('#divTituloEnvios').addClass("active");
    }
    if (id == '3'){
        $('#divFormas').css('display','block')
        $('#divTituloFormas').addClass("active");
    }
}
// CAPTURO EL CONTENEDOR DE LOS DETALLES/PRODUCTO
const contenedorProducto = document.querySelector('#contenedorProducto');

// CAPTURO LOS PARAMETROS DE LA URL
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
// EL ID EN REALIDAD ES EL INDICE DEL PRODUCTO DENTRO DE SU ARREGLO
let idProducto = params.id;
let categoriaProducto = params.categoria;
let producto;

if(categoriaProducto == 'remeras'){
    producto = remeras[idProducto];
}else if(categoriaProducto == 'buzos'){
    producto = buzos[idProducto];
}else if(categoriaProducto == 'gorras'){
    producto = gorras[idProducto];
}else{
    producto = barbijos[idProducto];
}

console.log(producto);



//----------------DETALLE DE LOS PRODUCTOS------------------------------------------------------------------------------------//

let productoDetalle = `
    <div class="col-sm-12 col-md-5">
        <img src="${producto.imagen}" class="card-img-top detalle-imagen" alt="">
    </div>

    <div class="col-sm-12 col-md-7">
                      <div class="card-body" style="background-color: white !important;">
                        <h5 class="card-title welcome-titulo detalle-titulo">${producto.nombre}</h5>
                        <span class="card-title welcome-precio detalle-precio">$ ${producto.precio}</span>

    `;


    
    // SI EL PRODUCTO TIENE COLORES LOS AGREGO, SINO LOS DEJO EN BLANCO
    if(producto.color != ''){
            productoDetalle += `
            <div style="padding-top:2rem;"> 
            
            <h5 class="card-title welcome-titulo">Colores</h5>   
            <div>
         
           `;
      
    }

    if(producto.color != ''){
      producto.color.forEach(color => {
          productoDetalle += `
          <div class="welcome-color mx-1" style="display: inline-block; background:${color.codigo}"></div>`;
      });
  }



  if(producto.talla != ''){
    

    productoDetalle += `
                            </div>
                        </div>
                        <div style="padding-top:2rem;"> 
                          <h5 class="card-title welcome-titulo">Talles: </h5>
                          <div>`;
                        };

    // SI EL PRODUCTO TIENE TALLES LOS AGREGO, SINO LOS DEJO EN BLANCO
    if(producto.talla != ''){
        producto.talla.forEach(talla => {
            productoDetalle += `<div class="detalle-talle" style="display: inline-block;">${talla}</div>`;
        });
    };                          
  
    

    if(categoriaProducto == 'remeras'){

     productoDetalle +=` 

                                 </div>
                             </div>
                             <div style="padding-top:2rem;">
                             <h5 class="card-title detalle-VerMas" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver tablas de talles</h5>
     
                               <!-- Modal -->
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                 <div class="modal-dialog">
                                   <div class="modal-content"  style="background-color:transparent;">                                
                                     <div class="modal-body">
                                       <img src="../imagenes/tallesremeraadulto.jpg" width="800px" height="520px">
                                       <img src="../imagenes/talles remeras ninos.jpg" width="800px" height="520px">
     
                                     </div>                                
                                   </div>
                                 </div>
                               </div>
     
                             </div>

        `;


      }else if(categoriaProducto == 'buzos'){
      productoDetalle +=` 
        </div>
        </div>
        <div style="padding-top:2rem;">
        <h5 class="card-title detalle-VerMas" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver tablas de talles</h5>

          <!-- Modal -->
           <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content"  style="background-color:transparent;">                                
                <div class="modal-body">
                  <img src="../imagenes/talles buzos.jpg" width="800px" height="520px">

                </div>                                
              </div>
            </div>
          </div>

        </div>

 `;
 


                          }                   
productoDetalle +=` 

                         <div style="padding-top:2rem; margin-left: 4rem;" >                         
                     <a href="https://api.whatsapp.com/send?phone=542804832617" target="_blank" rel="noreferrer noopener" aria-label="Whatsapp" class="btn btn-primary btn-consultar-producto"><i >Consultar</i></a> 
                    
                       </div> 
                    
                      </div>
                    </div>

                    `;
  
// CARGO LA ESTRUCTURA AL HTML.
contenedorProducto.innerHTML = productoDetalle;      

