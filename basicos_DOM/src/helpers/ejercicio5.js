import { ubicaciones } from "../db/data";
import fetching from "../utils/fetching";

export default function createejercicio5 () {
    const notFetching = () => ubicaciones;
    const renderNs = () => {
        const container = document.createElement('div');
        const header = document.createElement('h1');
        header.className= ('center')
        header.textContent = ('Buscar Alojamiento');
        container.appendChild(header)


        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message-container');
        const form = document.createElement('form');
        const formRow = document.createElement('div')
        formRow.classList.add('form-row');

        //select ubicación
        const locationGroup = document.createElement('div')
        locationGroup.classList.add('form-group');

        const locationLabel = document.createElement('label');
        locationLabel.textContent = 'Ubicación';
        const locationSelect = document.createElement('select');

        //opción vacia inicial 
        const emptyOption = document.createElement('option')
        emptyOption.value = "";
        emptyOption.textContent = 'Selecciona una ubicación'
        locationSelect.appendChild(emptyOption);

        //opciones para las ubicaciones
        ubicaciones.forEach((ubicacion) => {
            const option = document.createElement('option');
            option.value = ubicacion.id;
            option.textContent = ubicacion.nombre
            locationSelect.appendChild(option)
        })
        locationGroup.appendChild(locationLabel)
        locationGroup.appendChild(locationSelect)

        //check-in 
        const checkInGroup = document.createElement('div')
        checkInGroup.classList.add('form-group')

        const checkinLabel = document.createElement('label')
        checkinLabel.textContent = 'Check-in'
        const checkinInput = document.createElement('input')
        checkinInput.type = 'date';

        checkInGroup.appendChild(checkinLabel)
        checkInGroup.appendChild(checkinInput)

        //check-out
        const checkoutGroup = document.createElement('div')
        checkoutGroup.classList.add('form-group')

        const checkOutLabel = document.createElement('label')
        checkOutLabel.textContent = 'Check-out'

        const checkOutInput = document.createElement('input')
        checkOutInput.type = 'date';

        

        checkoutGroup.appendChild(checkOutLabel);
        checkoutGroup.appendChild(checkOutInput)

        //metemos los grupos en la fila
        formRow.appendChild(locationGroup);
        formRow.appendChild(checkInGroup);
        formRow.appendChild(checkoutGroup);

        form.appendChild(formRow)

        //Botón de enviar
        const submitBtn = document.createElement('button')
        submitBtn.type = 'submit'
        submitBtn.textContent = 'Buscar'
        form.appendChild(submitBtn)

        container.appendChild(form)

        //mensajes
        const showMessage = (text, type) => {
            //type: error o succes
            messageContainer.textContent = text;
            messageContainer.classList.remove('error', 'succes')
            messageContainer.classList.add('type')
        }

        //validar el submit
        form.addEventListener('submit', (event) => {
            event.preventDefault(); //evita que el formulario recargue la página al enviar

            const locValue = locationSelect.value;
            const checkInValue = checkinInput.value;
            const checkOutValue = checkOutInput.value;

            //Validar que todos los campos esten completos
            if(!locValue || !checkInValue || !checkOutValue){
                showMessage("Todos los campos son obligatrios", 'error');
                return; 
            }

            //Validamos checkOut posterior
            const checkInDate = new Date(checkInValue);
            const checkOutDate = new Date(checkOutValue);
            if (checkOutDate <= checkInDate){
                showMessage('La fecha debe ser posterior al check-in', 'error')
                return;
            }

            //Si todo esta ok
            showMessage('Busqueda realizada')
        })
        return container;
    }

    // Render síncrono y asíncrono
    const render = (isSyn = true) => {
        const mainContainer = document.createElement('div')
        if (isSyn){
            //Version sincrona con el array importado
            const v1Wrapper =document.createElement('div')
            v1Wrapper.innerHTML = '<h3>Version sincrona</h3>'
            v1Wrapper.appendChild(renderNs(notFetching()));
            mainContainer.appendChild(v1Wrapper);
        }else{
            //Version asincrona: obtiene ubicaciones mediante fetch
            const v2Wrapper = document.createElement('div')
            v2Wrapper.innerHTML = "<h3> Version asincrona</h3>"

            fetching('ubicaciones')
             .then((data) => {
                v2Wrapper.appendChild(renderNs(data));
             })
             .catch((err)=> {
                console.err('Error', err)

             })
             mainContainer.appendChild(v2Wrapper)
        }
        return mainContainer;

    }
    return {
        render,
    }
}