import React from 'react';
import HelloWorld from '../HelloWorld';
import List from '../List';
import Event from '../Event';
class ClassComponent extends React.Component{

    constructor(props){
        super(props); // async function which invokes parent constructor;

        this.state = {
            count: 1,
            showName: true,
            listData: [' Muskan', 'Naman', 'Nithya']
        };
    }
    componentDidMount(){
        setTimeout( ()=>{
            this.setState({
                showName: false
            })
        }, 10000 );
    }

    updateCount(){
        let newUpdatedValue = this.state.count + 1;
        this.setState({
            count: newUpdatedValue
        });
    }

    render(){
        return ( <div> Class component 
                    <br/>
                    Fees - {this.props.fees} 
                    <br/> 
                    {/* { this.state.showName && <HelloWorld show={this.state.showName} name={ this.state.count}/> }  */}
                    <h1> {this.state.count} </h1>
                    <List data={this.state.listData}/>
                    <Event clickHandler={ () => { this.updateCount() }} />
                </div>)
    }
}

export default ClassComponent;
