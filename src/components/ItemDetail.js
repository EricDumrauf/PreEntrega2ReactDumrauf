import ItemCount from "./ItemCount";

const ItemDetail = ({id, name, img, price, marca, stock}) => {

    return(
        <article className="card">
            <picture className="image is-1by1">
                <img src={img} alt={name}/>
            </picture>
            <div className="card-content">
                <div className="media-content">
                    <h2 className="title is-4">{marca}</h2>
                    <h3 className="subtitle is-4">{name}</h3>
                    <p className="subtitle is-4">
                        ${price}
                    </p>
                    <p className="subtitle is-4">
                        Stock Disponnible: {stock}
                    </p>
                </div>
            </div>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail