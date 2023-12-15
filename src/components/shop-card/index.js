import './index.css'
export default function ShopCard(props){
    const data = props['json-data']
    const { name, price, id, click } = data
    return <div className="shop-card">
        <div className='picture'><img/></div>
        <div className='content'>
            <div className='title'  style={{ WebkitBoxOrient: "vertical" }}>{name}</div>
            <div className='price'>{price}</div>
            <div className='btn'><button onClick={()=>{
                click(data)
            }}>加入购物车</button></div>
        </div>
    </div>
}