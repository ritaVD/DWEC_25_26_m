//Crear un sistema de reservas de un restaurante q tenga un map con clave la hora de la reserva en formato YYYY-MM-DD
// valor un set con el nombre(DNI) de los clientes que han reservado ese día

// agregarReservas
// cancelarReservas
// mostrarReservas
// estadisticas Reservas por dia, reservas totales, media reserva


const reservas = new Map<string, Set<string>>();

const addBooking = (dni : string, date: string): void => {
    if (!reservas.has(date)){
        reservas.set(date, new Set<string>());
    }
    reservas.get(date)?.add(dni);


}

const deleteReserva = ( dni : string, date: string): void => {
    if (reservas.has(date)){
        reservas.get(date)?.delete(dni);
    }

}

const showBookings = ( dni: string, date: string): void=> {
    for ( const [  date, dni ] of reservas ){
        console.log(`La fecha de la reserva es: ${date}`);
        for ( const dni of reservas){
            console.log(`Dni de la reserva: ${dni}`)
        }

    } 
}

const showStats = (): void => {
    
}
    