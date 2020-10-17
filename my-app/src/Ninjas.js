import React from 'react';

const Ninjas = ({ninjas}) => {

    // const ninjaList = ninjas.map(ninja =>{
    //     if(ninja.age>30){
    //     return (
    //         <div className="ninja" key={ninja.id}>
    //         <div>{ninja.name}</div>
    //         <div>{ninja.age}</div>
    //         <div>{ninja.belt}</div>

    //     </div>
 
    //     )
    //     } else{
    //         return null;
    //     }

    // });


    const ninjaList = ninjas.map(ninja =>{

        return ninja.age>30? (
        
            <div className="ninja" key={ninja.id}>
                <div>{ninja.name}</div>
                <div>{ninja.age}</div>
                <div>{ninja.belt}</div>

            </div>
                
        ):null;

    });
    return(
        <div className="ninja-list">
        {ninjaList}
        </div>
    )
}
export default Ninjas;