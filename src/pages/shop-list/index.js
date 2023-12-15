import ShopCard from "../../components/shop-card"
import { useDispatch, useSelector } from 'react-redux'
import * as Action from '../../../src/store/actions/index'
import ShopCart from '../../components/shop-cart'
import "./index.css"
export default function ShopList() {
  const dispatch = useDispatch()
  let shopList = [
    {
      id:7,
      name: "香蕉",
      price: "20.00",
      picture: ""
    },
    {
      id:2,
      name: "香蕉大流士该u是个拉士大夫拉的屎浪费的空间撒合法开始了的法律框架士大夫回来打卡就是回复第六空降萨芬撒",
      price: "20.00",
      picture: "",
    },
    {
      id:3,
      name: "香蕉",
      price: "20.00",
      picture: "",
    },
    {
      id:4,
      name: "香蕉",
      price: "20.00",
      picture: "",
    },
    {
      id:5,
      name: "香蕉",
      price: "20.00",
      picture: "",
    },
    {
      id:6,
      name: "香蕉",
      price: "20.00",
      picture: "",
    },
    {
      id:1,
      name: "香蕉",
      price: "20.00",
      picture: "",
    },
    {
      id:8,
      name: "香蕉",
      price: "20.00",
      picture: "",
    },
    {
      id:9,
      name: "香蕉",
      price: "20.00",
      picture: "",
    },
    {
      id:10,
      name: "香蕉",
      price: "20.00",
      picture: "",
    },
    {
      id:11,
      name: "香蕉",
      price: "20.00",
      picture: "",
    },
    {
      id:12,
      name: "香蕉",
      price: "20.00",
      picture: "",
    },
    {
      id:13,
      name: "香蕉",
      price: "20.00",
      picture: "",
    },
    {
      id:14,
      name: "香蕉",
      price: "20.00",
      picture: "",
    },
    {
      id:15,
      name: "香蕉",
      price: "20.00",
      picture: "",
    },
    {
      id:16,
      name: "香蕉",
      price: "20.00",
      picture: "",
    },
    {
      id:17,
      name: "香蕉",
      price: "20.00",
      picture: "",
    },
    {
      id:18,
      name: "香蕉",
      price: "20.00",
      picture: "",
    },
    {
      id:19,
      name: "香蕉",
      price: "20.00",
      picture: "",
    },
    {
      id:20,
      name: "香蕉",
      price: "20.00",
      picture: "",
    },
    {
      id:21,
      name: "香蕉",
      price: "20.00",
      picture: "",
    },
    {
      id:22,
      name: "香蕉",
      price: "20.00",
      picture: "",
    },
    {
      id:23,
      name: "香蕉",
      price: "20.00",
      picture: "",
    },
    {
      id:24,
      name: "香蕉",
      price: "20.00",
      picture: "",
    },
  ]
  shopList = shopList.map(item=>({...item,
    click:(data)=>{
      delete data.click
        dispatch(Action.ADD_SHOP(data))
    }}))
  // const shopListCart = useSelector((state) => {
  //   return state
  // })
  // console.log(shopListCart,123123)
  return (
    <div className="shop-container">
      <div className="shop-header">
        <div className="title">购物天堂</div>
        <div className="shop-cart-btn"><ShopCart></ShopCart></div>
      </div>
        <div className="shop-list">
          {shopList.map((item) => (
            <div class="shop-item">
              <ShopCard json-data={item}></ShopCard>
            </div>
          ))}
      </div>
    </div>
  )
}
