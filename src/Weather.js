import React from 'react'

export default function Weather({description, city, country, error, temperature}) {
    
    function matchValues () {
        if(description) {
            const weatherDescription = description.split(' ')
            const keyWords = ['cloudy','clouds', 'overcast', 'clear']
            for(let i = 0; i < weatherDescription.length; i++) {
                if(keyWords.includes(weatherDescription[i])) 
                {           
                    return <img src='https://media.freestocktextures.com/cache/74/8b/748ba3fe5976d8b03219a64851d2790d.jpg' />            
                }
                else
                {
                    return <img src='https://www.teahub.io/photos/full/186-1861404_rainy-day-images-free-download.jpg' />
                }
            }
        }}

    return (
        <div>
        {city && country && <p> {city}, {country}</p>}
        {temperature && <p> °C {temperature}</p>}
        {description && <p>  Conditions: {description}</p>}
        {error && <p>{error}</p>}
        {description && matchValues()}
    </div>
    )
}
