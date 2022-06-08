import React, {useState} from 'react'

import data from './data'

import './Persons.css'



export function Persons({data}) {

    

    return (
        <section className="persons-container">
            {data.map(person =>{
                const { age, id, name, image } = person;
                return (
                    <article key={id} className="person">
                        <img src={image} className="person-photo"/>
                        <div className="wrapper">
                            <h2 className="person-name">{name}</h2>
                            <p className="person-age">{age} Years</p>
                        </div>
                    </article>
                )
            })}
            
        </section>
    )
}
