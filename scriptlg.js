const Productos = [
    {
        id: 'prenda-01',
        nombre: 'Prenda 01',
        imagen: 'imgs/P1.jpg',
        categoria: {
            id: 'cat-01',
            titulo: 'Camisas'
        },
        precio: '3500'
    },
    {
        id: 'prenda-02',
        nombre: 'Prenda 02',
        imagen: 'imgs/P2.jpg',
        categoria: {
            id: 'cat-01',
            titulo: 'Camisas'
        },
        precio: '3500'
    },
    {
        id: 'prenda-03',
        nombre: 'Prenda 03',
        imagen: 'imgs/P3.jpg',
        categoria: {
            id: 'cat-01',
            titulo: 'Camisas'
        },
        precio: '3500'
    },
    {
        id: 'prenda-04',
        nombre: 'Prenda 04',
        imagen: 'imgs/P4.jpg',
        categoria: {
            id: 'cat-01',
            titulo: 'Camisas'
        },
        precio: '3500'
    },

    // -----------------------------------------------

    {
        id: 'prenda-05',
        nombre: 'Prenda 05',
        imagen: 'imgs/P5.jpg',
        categoria: {
            id: 'cat-02',
            titulo: 'Pantalones'
        },
        precio: '3500'
    },
    {
        id: 'prenda-06',
        nombre: 'Prenda 06',
        imagen: 'imgs/P6.jpg',
        categoria: {
            id: 'cat-02',
            titulo: 'Pantalones'
        },
        precio: '3500'
    },
    {
        id: 'prenda-07',
        nombre: 'Prenda 07',
        imagen: 'imgs/P7.jpg',
        categoria: {
            id: 'cat-02',
            titulo: 'Pantalones'
        },
        precio: '3500'
    },
    {
        id: 'prenda-08',
        nombre: 'Prenda 08',
        imagen: 'imgs/P8.jpg',
        categoria: {
            id: 'cat-02',
            titulo: 'Pantalones'
        },
        precio: '3500'
    },

    // ----------------------------------------------------

    {
        id: 'prenda-09',
        nombre: 'Prenda 09',
        imagen: 'imgs/P9.jpg',
        categoria: {
            id: 'cat-03',
            titulo: 'Blusas'
        },
        precio: '3500'
    },
    {
        id: 'prenda-10',
        nombre: 'Prenda 10',
        imagen: 'imgs/P10.jpg',
        categoria: {
            id: 'cat-03',
            titulo: 'Blusas'
        },
        precio: '3500'
    },
    {
        id: 'prenda-11',
        nombre: 'Prenda 11',
        imagen: 'imgs/P11.jpg',
        categoria: {
            id: 'cat-03',
            titulo: 'Blusas'
        },
        precio: '3500'
    },
    {
        id: 'prenda-12',
        nombre: 'Prenda 12',
        imagen: 'imgs/P12.jpg',
        categoria: {
            id: 'cat-03',
            titulo: 'Blusas'
        },
        precio: '3500'
    },

    //-----------------------------------------------
    
    {
        id: 'prenda-09',
        nombre: 'Prenda 09',
        imagen: 'imgs/P9.jpg',
        categoria: {
            id: 'cat-04',
            titulo: 'Accesorios'
        },
        precio: '3500'
    },
    {
        id: 'prenda-10',
        nombre: 'Prenda 10',
        imagen: 'imgs/P10.jpg',
        categoria: {
            id: 'cat-04',
            titulo: 'Accesorios'
        },
        precio: '3500'
    },
    {
        id: 'prenda-11',
        nombre: 'Prenda 11',
        imagen: 'imgs/P11.jpg',
        categoria: {
            id: 'cat-04',
            titulo: 'Accesorios'
        },
        precio: '3500'
    },
    {
        id: 'prenda-12',
        nombre: 'Prenda 12',
        imagen: 'imgs/P12.jpg',
        categoria: {
            id: 'cat-04',
            titulo: 'Accesorios'
        },
        precio: '3500'
    }
]

const contenedorProductos = document.querySelector('#contenedor-principal')
let actAddbtn = document.querySelectorAll('.addbtn')

let cargarProductos = (productoSeleccionado) =>{
    
    contenedorProductos.innerHTML = ''

    productoSeleccionado.forEach(producto => {
        const contenedorProd = document.createElement('div')
        contenedorProd.classList.add('Productos')

        contenedorProd.innerHTML =
       `<img src="${producto.imagen}" alt="${producto.nombre}">
        <div class="Descricion-producto">
            <div class="info">
                <h3>${producto.nombre} <i class="bi bi-tag-fill"></i></h3>
                <i id="${producto.id}" class="bi bi-bookmark save"></i>
            </div>
            <p>$${producto.precio}</p>
            <button id="${producto.id}" class="addbtn">ADD</button>
        </div>`

        contenedorProductos.appendChild(contenedorProd)
    })
    // mandar a llamar los botones de agregar
    actualizarAddbtn()
    saveBtn()
    saveBtnAdd()

}
cargarProductos(Productos)

// -------------------------------------------------------------------------------------------------------------------------------
// FUNCION QUE ME ACTUALICE LOS BOTONES DE AGREGAR Y QUE LES AGREGUE UN EVENTO PARA AGREGALOS A UN ARRAY VACIO QUE SERA EL CARRITO

function actualizarAddbtn() {
    actAddbtn = document.querySelectorAll('.addbtn')

    // una vez llamados la misma funcion le agrega un addEventListener
    actAddbtn.forEach(btn=> {
        btn.addEventListener('click', cargarCarrito)
    })
}

// -------------------------------------------------------------------------------------------------------

// CARGAMOS LOS PRODUCTOS DEL LOCALSTORAGE AL CARRITO DE COMPRAS

let proCarrito
const productosCarritosLS = JSON.parse(localStorage.getItem('cantidad-carrito'))
let cantidadCarrito = document.querySelector('#cantidad')

if (productosCarritosLS) {
    proCarrito = productosCarritosLS
    actualizarCantidad()
} else {
    proCarrito = []
}

function cargarCarrito(eve) {
    const idbtn = eve.currentTarget.id
    const  productoAgregado = Productos.find(producto => producto.id === idbtn)

    if (proCarrito.some(producto => producto.id == idbtn)) {
        const index = proCarrito.findIndex(producto => producto.id === idbtn)
        proCarrito[index].cantidad++        
    } else {
        productoAgregado.cantidad = 1
        proCarrito.push(productoAgregado)
    }
    actualizarCantidad()

    localStorage.setItem('cantidad-carrito', JSON.stringify(proCarrito))

    console.log(localStorage.getItem('cantidad-carrito'));
}

function actualizarCantidad() {
    let cantidad = proCarrito.reduce((acu, producto) => acu + producto.cantidad, 0)
    cantidadCarrito.innerHTML = cantidad
}

// --------------------------------------------------------------------------------------------------------
// Evento para el boton de las categorias

const botonIndex = document.querySelectorAll('.boton-index')
const titulo = document.querySelector('#titulo-main')

botonIndex.forEach(boton =>{

    boton.addEventListener('click', (e)=>{

        botonIndex.forEach(boton => boton.classList.remove('active'))

        e.currentTarget.classList.add('active')

        if(e.currentTarget.id != 'all'){
            const tituloFilter = Productos.find(producto => producto.categoria.id === e.currentTarget.id)
            titulo.innerHTML =   tituloFilter.categoria.titulo

            const profilter = Productos.filter(profil => profil.categoria.id ===  e.currentTarget.id)
            cargarProductos(profilter)
        }else{
            titulo.innerHTML = 'Productos'
            cargarProductos(Productos)
        }

    })

})

// Guardar Producto

function saveBtn(){
    const saveProducto = document.querySelectorAll('.save')
    saveProducto.forEach(save =>{
        save.addEventListener('click', ()=>{
            save.classList.remove('bi-bookmark')
            save.classList.add('bi-bookmark-fill')
        })
    })
}


// --------------------------------------------------------------------------
function saveBtnAdd() {
    const savebtn = document.querySelectorAll('.save')

    savebtn.forEach(btn => {
        btn.addEventListener('click', guardarProducto)
    })
}

function guardarProducto(e) {
    const idsave = e.currentTarget.id
    const index = Productos.find(producto => producto.id === idsave)
    
    console.log(index);
}

// ----------------------------------------------------------------------------
