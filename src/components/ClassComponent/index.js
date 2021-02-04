import React from 'react';
import HelloWorld from '../HelloWorld';

class ClassComponent extends React.Component{

    constructor(props){
        super(props); // async function which invokes parent constructor;

        this.state = {
            count: 1
        };
    }
    componentDidMount(){
        setTimeout( ()=>{
            this.setState({
                count: 6
            })
        }, 3000 );
    }

    render(){
        return <div> Class component | Fees - {this.props.fees} <br/> <HelloWorld name={ this.state.count}/> </div>
    }
}

export default ClassComponent;
