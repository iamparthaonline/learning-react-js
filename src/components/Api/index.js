import React from 'react';
import List from '../List';

class Api extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data: [],
            loading: true
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then( response => response.json())
        .then( (data) => {
            console.log('data', data);
            let convertedData = data.map( item => {
                return item.title;
            });
            this.setState({
                data: convertedData,
                loading: false
            });
        })
    }

    render(){
        return (<div>
            <h2>List of data</h2>
            { this.state.loading && <p>Loading data</p> } 
            { !this.state.loading && <List data = {this.state.data}/> }
        </div>)
    }
}

export default Api;