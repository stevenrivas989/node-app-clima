const axios = require('axios');

const getClima = async (lat,lon)=>{

    const res= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=84ed835239f8a557431e521721bacb34`)
    return res.data.main.temp

}

module.exports={
    getClima
}