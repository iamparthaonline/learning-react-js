const Event = (props) => {
    return <button onClick = { () => {
        props.clickHandler()
    }} > Ok </button>
};
export default Event;