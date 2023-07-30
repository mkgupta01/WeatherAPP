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
            <h1 className='text-4xl font-bold'><span class="magic"><span class="magic-text">Weather App</span></span></h1>
            <div class="w-72">
        <div class="relative h-30 w-full min-w-[200px]">
            <input
            class="peer h-full w-full rounded-[7px] border border-gray-900  bg-transparent px-3 py-2.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
            />
            <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Required
            </label>
        </div>
        </div>

            <div className='border-2 border-gray-900 lg:h-56 lg:w-1/3 lg:my-20 rounded shadow-xl '>
                <p className='text-center text-8xl'>{ data.temp }</p>
                <p className='text-center text-3xl'>{ data.current_weather }</p>    
            </div>
        </div>
    )
}

export default Weather


