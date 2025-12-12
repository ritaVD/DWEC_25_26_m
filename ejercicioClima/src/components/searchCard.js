
export default function createSearchCard(onSearch) {

    //variables privadas
    let isSearching = false;
    //DOM
    const container = document.createElement('div');
    container.className = 'bg-white rounded-lg shadow-lg p-6 mb-6';

    //titulo
    const title = document.createElement('h2');
    title.textContent = 'Buscar ciudad';
    container.appendChild(title);

    //input
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Introduzca aqui la ciudad a buscar';
    container.appendChild(input);

    //boton
    const button = document.createElement('button');
    button.textContent = 'Buscar';
    container.appendChild(button);

    //crear un parrafo llamadado statusElement que permita especificar los sifuientes estados a traves de la funcion
    //setStatus(message, type = 'info')
    //los estados son: -600
    //loading color azul
    //error color rojo
    //success color verde
    //info color gris
    //crear un com,ponente y la funcion por defecto siempre sera info
    //que permita modificar el valor del comoponen statusElement
    const statusElement = document.createElement('p');
    statusElement.textContent = '';
    function setStatus(message, type = 'info'){ 
        statusElement.textContent = message;
        if (type === 'loading'){
            statusElement.className += 'text-blue-600';
        }else if(type === 'error'){
            statusElement.className += 'text-red-600';
        }else if (type === 'success'){
            statusElement.className += 'text-green-600';
        }else if (type === 'info'){
            statusElement.className += 'text-gray-600';
        }
    }
    container.appendChild(statusElement);

    async function  performSearch() {
        const cityName = input.value.toLowerCase().trim();
        if(!cityName){
            setStatus('Escribe la nombre de la ciudad', 'error')
            return
        }
        //Comenzamos la busqueda
        isSearching = true;
        //ahora hago la busqueda
        try{
            await onSearch(cityName)
            setStatus('Busqueda realizada correctamente', 'success')

        }catch (err){
            setStatus('Error en la busqueda', 'error')
            throw new Error("Error", err.message);

        }finally{
            isSearching = false;
        }

        //en funcion de los estados de isLoanding
        //realizamos la busqueda
        //usando el callback de buscar

        //EVENTOS
        button.addEventListener('click', performSearch)
        input.addEventListener('keypress', event => {
            if(event.key === 'Enter'){
                performSearch();
            }
        })   
        xxx.appendChild(); 
    }
     return  {
        element: container,
        focus: () => input.focus(),
        
        clearForm: () => {
            input.value = '';
            setStatus('');
            isSearching = false;
        
        },
        getValue: () => input.value.trim(),

     }
    }
  

//Crea una aplicacion para gestionar las reseñas de restaurantes utilizando closure o patternFactory
//Desarrolla un sistema de reseñas que permita a los usuarios
//escribir reseñas de restaurantes
//calificar con un sistema de estrellas 
//validar los datos del formulario
//guardar las reseñas en el localStorage
//ver y eliminar reseñas guardadas

