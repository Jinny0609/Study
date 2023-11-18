import ShoppingListItem from "./ShoppingListItem";
function ShoppingList({ items }){
return(
        <ul>
            {items.map((i) => (
                // 컴포넌트를 사용해 각 항목을 렌더링
                <ShoppingListItem
                    key={i.id}
                    item={i.item} 
                    quantitiy={i.quantitiy}
                    completed={i.completed}
                />
                // 전개 연산자 사용
                // <ShoppingListItem key={i.id} {...i} />  
            ))}
        </ul>
    );
}

export default ShoppingList;

// const data = [
//     {item : "eggs", quantitiy: 12, completed: false},
//     {item : "milk", quantitiy: 1, completed: true},
//     {item : "chicken breasts", quantitiy: 4, completed: false},
//     {item : "carrots", quantitiy: 6, completed: false},
//   ];