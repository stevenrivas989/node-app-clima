const axios = require('axios');

const getLugarLatLon = async (direccion) => {

    const encoderURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encoderURL}`,
        timeout: 1000,
        headers: { 'X-RapidAPI-Key': 'f3eac92e95msh131da835ba9d400p1d8393jsn6e11a5c2886a' }
    });

    const res = await instance.get();

    if (res.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`)
    }

    const data = res.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        dir,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLon
}




