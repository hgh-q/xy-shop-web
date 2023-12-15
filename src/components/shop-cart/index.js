import './index.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from '../../store'
export default function ShopCart(props){
    // const shopCartList = useSelector((state) => {
    //     return state.shop.shopList
    //   })
    const [forceUpdate,setfForceUpdate] = useState(true)
      let shopList = []
      store.subscribe(()=>{
        shopList  = store.getState().shop.shopList
        setfForceUpdate(false);
        setTimeout(() => {
            console.log("🚀 ~ file: index.js:13 ~ store.subscribe ~ shopList:", shopList)
          setfForceUpdate(true);
        }, 0);
      })
    return forceUpdate?<div className="shop-cart">
        <button>购物车</button>
        {shopList.map(item=><div>{item.name}</div>)}
    </div>:''
}