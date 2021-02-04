import './style.css';

const HelloWorld = (props) => {

    return <div className="hello-world">Hello World {props.name || 'James' } </div>
};

export default HelloWorld;
