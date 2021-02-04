import './style.css';

const HelloWorld = (props) => {

    return (<div className="hello-world">Hello World 
                { props.show && <span>{props.name || 'James' } </span> }
            </div>)
};

export default HelloWorld;
