const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c4126697efmshea9079f05e7e2d3p199bc6jsnb5fee3a255b0',
        'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
    }
};

const getweather = (city) => {

    cityName.innerHTML = city;
    fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=' + city, options)
        .then(response => response.json())
        .then(response => {

            console.log(response)
            co.innerHTML = response.CO.concentration;
            no2.innerHTML = response.NO2.concentration;
            o3.innerHTML = response.O3.concentration;
            so2.innerHTML = response.SO2.concentration;
            pm10.innerHTML = response.PM10.concentration;


        })
        .catch(err => console.error(err));

}



submitcity.addEventListener('click', (e) => {
    e.preventDefault();
    getweather(cityinp.value);
    cityinp.value = " ";
})

getweather('Bhubaneswar');