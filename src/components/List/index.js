const List = ( props ) => {
    return (<ul className="list-group">
        {props.data.map( item => <li className="list-group-item"> {item} - {item.length} </li>) }
    </ul>)
}
export default List;



