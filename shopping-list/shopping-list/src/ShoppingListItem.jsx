function ShoppingListItem({item, quantitiy, completed}){
    const styles = {
        color: completed ? "grey" : "red", 
        textDecoration: completed ? "line-through" : "none"
    };
    return (
        <li style={styles}>
            {item} = {quantitiy}
        </li>
    )
}

export default ShoppingListItem;




