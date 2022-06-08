import React, {useState} from 'react'

import {Persons} from './Persons'

import './Board.css'
import data from './data'

function Board() {
    const [people, setPeople] = useState(data)

    
    return (
        <main>
            <h1 className="title"> {people.length} birthdays today </h1>
            <Persons data={people} />
            <button onClick={() => setPeople([])}>clear all</button>
        </main>
        
    )
}

export default Board
