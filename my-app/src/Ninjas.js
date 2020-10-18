import React from 'react';
import './Ninjas.css';

const Ninjas = ({ninjas,deleteNinja}) => {

    const ninjaList = ninjas.map(ninja =>{
       
        return (
            <div className="ninja" key={ninja.id}>
                <div>{ninja.name}</div>
                <div>{ninja.age}</div>
                <div>{ninja.belt}</div>
                <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
            </div>
                )

    });
    return(
        <div className="ninja-list">
        {ninjaList}
        </div>
    )
}
export default Ninjas;