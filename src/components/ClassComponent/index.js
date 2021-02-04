import React from 'react';
import HelloWorld from '../HelloWorld';

class ClassComponent extends React.Component{

    constructor(props){
        super(props); // async function which invokes parent constructor;

        this.state = {
            count: 1,
            showName: true
        };
    }
    componentDidMount(){
        setTimeout( ()=>{
            this.setState({
                showName: false
            })
        }, 10000 );
    }

    render(){
        return ( <div> Class component 
                    <br/>
                    Fees - {this.props.fees} 
                    <br/> 
                    <HelloWorld show={this.state.showName} name={ this.state.count}/> 
                </div>)
    }
}

export default ClassComponent;
