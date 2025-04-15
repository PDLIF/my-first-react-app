function Item({ name, isPacked }) {
    return (
        <li className="item">
            {name} {isPacked && '✅'}
        </li>
    )
}

function PackingList() {
    return (
        <section>
            <h1>Packing List</h1>
            <ul>
                <Item name="Space suit" isPacked={true}/>
                <Item name="Helmet with a golden leaf" isPacked={false}/>
                <Item name="Photo of parents and family" isPacked={true}/>
            </ul>
        </section>
    );
}

export default PackingList;