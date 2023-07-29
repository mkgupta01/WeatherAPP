import React, { useState } from 'react'

const Weather = () => {
    const [city, setCity] = useState('');
    const [data, setData] = useState({});

    const url = `https://the-weather-api.p.rapidapi.com/api/weather/${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1cacde308fmsh51530d9b1f4230dp1083b0jsn8a8655591289',
            'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
        }
    };

    const search = (event) => {
        if (event.key === 'Enter') {
            fetch(url, options)
                .then(res => res.json())
                .then(result => {
                    setData(result.data);
                })
            setCity('');
            console.log(data);
        }
    }
    return (
        <div className='my-14 flex flex-col items-center'>
            <input
                className='border border-black block lg:h-5/6 lg:w-1/4 m-auto px-4 text-lg'
                type="text"
                placeholder='Enter your city..'
                value={city}
                onChange={(e) => { setCity(e.target.value) }}
                onKeyPress={search} />

            <div className='border border-black lg:h-56 lg:w-1/3 lg:my-20'>
                <p className='text-center text-8xl'>{ data.temp }</p>
                <p className='text-center text-3xl'>{ data.current_weather }</p>    
            </div>
        </div>
    )
}

export default Weather


