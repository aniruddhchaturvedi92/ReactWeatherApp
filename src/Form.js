import React from 'react'

export default function Form(props) {
    return (
        <form onSubmit={props.getWeather}>
        <input
        type='text'
        placeholder='city'
        name='city'
        />
        <input
        type='text'
        placeholder='country'
        name='country'
        />
        <button>Submit</button>
    </form>
    )
}
