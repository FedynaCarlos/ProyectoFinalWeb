window.onload = function () {
  const items = document.getElementById('items')
  const footer = document.getElementById('footer')
  const templateCard = document.getElementById("template-card");
  const templateFooter = document.getElementById("template-footer").content;
  const templateCarrito = document.getElementById("template-carrito").content;
  const fragment = document.createDocumentFragment();

  let card = document.querySelector(".boton-formulario");
  let carrito = {};


  templateCard.addEventListener('click', e => {addCarrito(e)});
  items.addEventListener('click', e => {btnAumentarDisminuir(e)});


  const addCarrito = e => {

    
    if (e.target.classList.contains("boton-formulario")) {
      setCarrito(e.target.parentElement);
    }
    e.stopPropagation()
  }

  const setCarrito = objeto => {
    const producto = {
      id: objeto.querySelector(".boton-formulario").dataset.id,
      nombre: objeto.querySelector(".nombreProdDetail").textContent,
      descripcion: objeto.querySelector(".descProduct").textContent,
      cepa: objeto.querySelector(".cepaProduct").textContent,
      categoria: objeto.querySelector(".categoriaProduct").textContent,
      precio: objeto.querySelector(".precioProduct").textContent,
      cantidad: 1
    };
    if(carrito.hasOwnProperty(producto.id)){
      producto.cantidad = carrito[producto.id].cantidad + 1
    }
    carrito[producto.id] = {...producto}
    pintarCarrito()
    //console.log(carrito)
  }

  const pintarCarrito = () => {
    console.log(carrito);
    items.innerHTML = ""
    Object.values(carrito).forEach(producto => {
      templateCarrito.querySelector('th').textContent = producto.id
      templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
      templateCarrito.querySelectorAll("td")[0].textContent = producto.nombre;
      templateCarrito.querySelector(".btn-info").dataset.id = producto.id
      templateCarrito.querySelector(".btn-danger").dataset.id = producto.id
      templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio
      const clone = templateCarrito.cloneNode(true)
      fragment.appendChild(clone)
    })
    items.appendChild(fragment)
    pintarFooter()
  }

  const pintarFooter = () => {
    footer.innerHTML = "";
    if (Object.keys(carrito).length === 0) {
      footer.innerHTML = `
      <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
      `;
      return;
    }

    // sumar cantidad y sumar totales
    const nCantidad = Object.values(carrito).reduce(
      (acc, { cantidad }) => acc + cantidad, 0);
    const nPrecio = Object.values(carrito).reduce(
      (acc, { cantidad, precio }) => acc + cantidad * precio, 0);
    // console.log(nPrecio)

    templateFooter.querySelectorAll("td")[0].textContent = nCantidad;
    templateFooter.querySelector("span").textContent = nPrecio;

    const clone = templateFooter.cloneNode(true);
    fragment.appendChild(clone);

    footer.appendChild(fragment);

    const boton = document.querySelector("#vaciar-carrito");
    boton.addEventListener("click", () => {
      carrito = {};
      pintarCarrito();
    });
  }

  const btnAumentarDisminuir = (e) => {
    // console.log(e.target.classList.contains('btn-info'))
    if (e.target.classList.contains("btn-info")) {
      const producto = carrito[e.target.dataset.id];
      producto.cantidad++;
      carrito[e.target.dataset.id] = { ...producto };
      pintarCarrito();
    }

    if (e.target.classList.contains("btn-danger")) {
      const producto = carrito[e.target.dataset.id];
      producto.cantidad--;
      if (producto.cantidad === 0) {
        delete carrito[e.target.dataset.id];
      } else {
        carrito[e.target.dataset.id] = { ...producto };
      }
      pintarCarrito();
    }
    e.stopPropagation();
  };

};
