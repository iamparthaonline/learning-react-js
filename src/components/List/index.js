const List = ( props ) => {
    return (<ul>
        {props.data.map( item => <li> {item} - {item.length} </li>) }
    </ul>)
}
export default List;



