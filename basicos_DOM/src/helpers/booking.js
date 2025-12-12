export const createProyectoBooking = () => {

    // Funciones para guardar y sacar de local storage -> Persistencia de datos para el caché
    const guardarLocalStorage = (key, value)=> {
        localStorage.setItem(key, JSON.stringify([...value]));
    }
    const sacarLocalStorage = (key) => {
        const data = localStorage.getItem(key)
        if(!data){
            return [];
        }
        const map = new Map(JSON.parse(data))
        return map; 

    }
    let container = document.createElement('div')
    //Para coger el caché y las reservas que esten en el carrito: 
    const cache = new Map(sacarLocalStorage('cache') || [])
    const reservas = new Map(sacarLocalStorage('carritoReserva') || []);

    //Render del header
    const renderHeader = () => {
        const header = document.createElement('header')
        const title = document.createElement('h1')
        title.textContent = 'Proyecto del booking'
        header.appendChild(title)
        return header;
    }

    //Render del footer
    const renderFooter = () => {
        const footer = document.createElement('footer');
        const info = document.createElement('p')
        info.textContent = 'Informacion de contacto'
        footer.appendChild(info)
        return footer;  
    }

    const search = async (filters) => {
        try {
            const hotels = await fetching('hotels')
            if(!filters){
                return hotels;

            }
            const checkIn = new Date(filters.checkIn);
            const checkOut = new Date(filters.checkOut)
            const numHuespedes = Number(filters.huespedes)

            const dataFiltrada = hotels.filter((hotel) => {
                if (numHuespedes> hotel.maxGuests) return false; //que el hotel soporta ese número de huespedes 

                const rangoValido = hotel.availableRanges.some((range) => { //es un array de rangos y some devuelve true si algun ranfo lo cumple. Si algo falla en el try devolerá un array vacio ([])
                    const from = new Date (range.from);
                    const to = new Date(range.to)
                    return checkIn >=from && checkOut <= to;
                });
                return rangoValido;
            })

        }catch (err){
            throw new Error('Error', err)
        }
    }

    const renderGridHotel= (arrayHoteles, numHuespedes) => {
        const container = document.createElement('div')
        arrayHoteles.forEach(hotel => {
            const card= document.createElement('div')
            const name = document.createElement('h3')
            name.className = 'padding 0px margin 10px'
            name.textContent = hotel.name;
            card.appendChild(name)

            const stars = document.createElement('p')
            stars.textContent('⭐'.repeat(hotel.stars))
            card.appendChild(stars);

            const price = document.createElement('p')
            price.textContent = `${hotel.pricePerGuest}€ por persona`
            card.appendChild(price)

            card.addEventListener('click', ()=> {
                addReserva(hotel, Number(numHuespedes));
            });
            container.appendChild(card)

        });
        return container;
    }

    const addReserva = (hotel, numHuespedes) => {
        if (reservas.size > 0){
            return false;
        }
        const objecto = {
            nombre: hotel.name,
            personas: numHuespedes,
            estrellas: '⭐'.repeat(hotel.stars),
            precio: hotel.pricePerGuest * numHuespedes,
            iva: hotel.pricePerGuest * 0.1,
            total: 
              hotel.pricePerGuest *numHuespedes + hotel.pricePerGuest* numHuespedes*0.1
        }
        
        reservas.set(hotel.name, objecto);
        guardarLocalStorage('carritoReserva', reservas);

        if (container){
            container.innerHtml = '';
            container.appendChild(renderReserva())
        }
        
    }
    const finishReserva = () => {
        reservas.clear();
        guardarLocalStorage("carritoReserva", reservas);
    };

    const renderReserva = () => {
    containerReservaGlobal = document.createElement("div");
    const containerReserva = containerReservaGlobal;
    const title = document.createElement("h2");
    title.textContent = "Reserva";
    containerReserva.appendChild(title);
    [...reservas.values()].forEach((reserva) => {
      const reservaCard = document.createElement("div");
      const reservaNombre = document.createElement("h3");
      reservaNombre.textContent = reserva.nombre;
      const reservaHuespedes = document.createElement("p");
      reservaHuespedes.textContent = `${reserva.personas} personas.`;
      const reservaStars = document.createElement("p");
      reservaStars.textContent = reserva.estrellas;
      const reservaPrecio = document.createElement("p");
      reservaPrecio.textContent = `Precio: ${reserva.precio}€`;
      const reservaIva = document.createElement("p");
      reservaIva.textContent = `IVA(10%): ${reserva.iva}€`;
      const reservaTotal = document.createElement("p");
      reservaTotal.textContent = `Total: ${reserva.total}€`;
      reservaCard.appendChild(reservaNombre);
      reservaCard.appendChild(reservaHuespedes);
      reservaCard.appendChild(reservaStars);
      reservaCard.appendChild(reservaPrecio);
      reservaCard.appendChild(reservaIva);
      reservaCard.appendChild(reservaTotal);
      containerReserva.appendChild(reservaCard);
      
      const btnFinalizar = document.createElement("button");
      btnFinalizar.textContent = "Finalizar Reserva";
      reservaCard.appendChild(btnFinalizar);

      btnFinalizar.addEventListener("click", () => {
        finishReserva();
        containerReserva.innerHTML = "";
      });
      containerReserva.appendChild(reservaCard);
    });
    return containerReserva;
  };
  const renderMain = () => {
    // Containers
    const container = document.createElement("div");
    const form = document.createElement("form");
    const inputCheckIn = document.createElement("input");
    inputCheckIn.type = "date";
    const inputCheckOut = document.createElement("input");
    inputCheckOut.type = "date";
    const inputHuespedes = document.createElement("input");
    inputHuespedes.type = "number";
    const enviarForm = document.createElement("button");
    enviarForm.type = "submit";
    enviarForm.textContent = "Buscar";
    const gridHoteles = document.createElement("div");

    form.appendChild(inputCheckIn);
    form.appendChild(inputCheckOut);
    form.appendChild(inputHuespedes);
    form.appendChild(enviarForm);

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      gridHoteles.innerHTML = "";
      const tituloHoteles = document.createElement("h2");
      tituloHoteles.textContent = "Hoteles";
      gridHoteles.appendChild(tituloHoteles);
      if (new Date(inputCheckIn.value) > new Date(inputCheckOut.value)) {
        console.log("fecha incorrecta");
      }
      if (inputHuespedes.value < 1) {
        console.log("Huespedes incorrectos");
      }

      const filters = {
        checkIn: inputCheckIn.value,
        checkOut: inputCheckOut.value,
        huespedes: inputHuespedes.value,
      };

      const dataEncontrada = await search(filters);
      gridHoteles.appendChild(
        renderGridHotel(dataEncontrada, inputHuespedes.value)
      );
    });

    container.appendChild(form);
    container.appendChild(renderReserva());
    container.appendChild(gridHoteles);
    return container;
  };

  const render = () => {
    const mainContainer = document.createElement("div");
    const v1Wrapper = document.createElement("div");
    v1Wrapper.appendChild(renderHeader());
    v1Wrapper.appendChild(renderMain());
    v1Wrapper.appendChild(renderFooter());

    mainContainer.appendChild(v1Wrapper);
    return mainContainer;
  };
  return { render };
};
