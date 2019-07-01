const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demmand: true
    }
}).argv

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');





const getInfo = async (direccion) => {
    /**Mi Forma */
    lugar.getLugarLatLon(direccion)
        .then(data => {
            const lat = data.lat;
            const lon = data.lon;
            return clima.getClima(lat, lon)
        }).then(data => {
            console.log(`El clima de ${direccion} es ${data}`);
        }).catch(err => console.error(`No se pudo determinar el clima de ${direccion}`))

    /**Forma Curso */

    // try{
    //     const coord = await lugar.getLugarLatLon(direccion);
    //     const temp = await clima.getClima(lat, lon);
    //     return `El clima de ${coord.dir} es de ${temp}`;
    // }catch(error){
    //     return `No se pudo determinar el clima de ${direccion}`
    // }


}

/**Mi Forma */
getInfo(argv.direccion)

/**Forma Curso */
// getInfo(argv.direccion)
//     .then(data => console.log(data))
//     .catch(err => console.error(err))