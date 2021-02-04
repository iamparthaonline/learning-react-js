import React from 'react';
import './style.css';
class Form extends React.Component{

    constructor( props ){
        super( props );
        this.state = {
            value: 'Team 12'
        };
    }

    formHandleSubmit(event){
        event.preventDefault();
        console.log('form submitted -- > ', this.state.value );

    }

    handleChange(event){
        console.log('Vaue - ', event.target.value);
        this.setState({
            value: event.target.value
        });
    }

    render(){
        return (
            <form onSubmit={ (event) => {
                this.formHandleSubmit(event)
            }}>
                <input type="text" value={this.state.value} onChange={ (event) => {
                    this.handleChange(event);
                }} /> 
                {/* To DO - Validations and error messages  */}
                <button type="submit"> Submit </button>
            </form>
        )
    }
}

export default Form;