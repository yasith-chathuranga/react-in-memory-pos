export function ItemModel(props, children) {
    return (
        <>
            <input type="number" placeholder='code' onChange={(e) => props.setCode(e.target.value)}/>
            <input type="text" placeholder='itemName' onChange={(e) => props.setItemName(e.target.value)}/>
            <input type="number" placeholder='qty' onChange={(e) => props.setQty(e.target.value)}/>

            <br/>
            <button onClick={props.handleSubmit} id="item-btn">{props.children}</button>
        </>
    );
}