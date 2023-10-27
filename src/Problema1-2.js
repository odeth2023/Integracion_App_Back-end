import React, {useState} from 'react'

export default class ComponenteClase extends React.Component{
    
    constructor(props)
    {
        super(props);
        this.state = {
            nombre: 'Componente de clase'
        }
    }
    
    render(){
        return
        (
            <div className="C">
            
                <a onClick={()=>this.setState({nombre: 'Actualizado componente de clase'})}>
                    {this.state.nombre}
                </a>
            </div>

        )
        
    }
}

