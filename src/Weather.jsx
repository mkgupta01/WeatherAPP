import React, { useState } from 'react'

import { FaWind, FaEye } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaMaskFace } from "react-icons/fa6"


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
                .catch(err =>{
                    alert(err);
                })
            setCity('');
        }
    }
    return (
        <div className='flex flex-row'>
            <div className='h-screen w-[40%] px-8 flex items-center bg-indigo-800'>
                <h2 className='text-8xl font-bold text-white tracking-wide'>WEATHER <br></br> APP</h2>
            </div>

            <div style={{ '--image-url': `url(${data.bg_image})` }} className='bg-[image:var(--image-url)] bg-cover h-screen w-[60%] flex flex-col items-center justify-center'>
                <input
                    className='border border-black h-12 w-[30rem] px-5 text-lg font-bold rounded-3xl outline-none'
                    type="text"
                    placeholder='Enter your city and press Enter..'
                    value={city}
                    onChange={(e) => { setCity(e.target.value) }}
                    onKeyPress={search} />

                {data.temp ? <div className='h-60 w-[30rem] my-20 bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 text-white'>
                    <p className='text-center text-2xl font-bold my-2'>{data.city}</p>
                    <p className='text-center text-7xl font-bold my-2'>{data.temp + '℃'}</p>
                    <p className='text-center text-2xl font-bold my-2'>{data.current_weather}</p>

                    <div className='mx-auto my w-[60%] flex flex-col text-lg font-semibold '>
                        <div className='flex flex-row justify-between'>
                            <p><FaMaskFace className='inline' /> {data.aqi}</p>
                            <p><FaEye className='inline' /> {data.visibility}</p>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <p><WiHumidity className='inline' /> {data.humidity}</p>
                            <p><FaWind className='inline' /> {data.wind}</p>
                        </div>
                    </div>
                </div> : <></>
                }
            </div>
        </div>
    )
}

export default Weather


