import React from 'react'
import firstShoe from '../assets/1.jpeg'
import secondShoe from '../assets/2.jpeg'
import thirdShoe from '../assets/3.jpeg'
import fourthShoe from '../assets/4.png'
import fifthShoe from '../assets/5.png'

const Products = () => {
    const products = [
        {   
            pid:1,
            name:"Nike Air Forc 1*07",
            category:"Men's Shoe",
            colorAvailable:1,
            img:firstShoe,
            MRP:8195.00
        },
        {
            pid:2,
            name:"Nike Air Max Cirro",
            category:"Men's Slides",
            colorAvailable:4,
            img:secondShoe,
            MRP:3695.00
        },
        {
            pid:3,
            name:"Nike Killshot 2 leather",
            category:"Men's Shoe",
            colorAvailable:2,
            img:thirdShoe,
            MRP:7995.00
        },
        {
            pid:4,
            name:"Nike Killshot 2 leather",
            category:"Men's Shoe",
            colorAvailable:2,
            img:fourthShoe,
            MRP:7995.00
        },
        {
            pid:5,
            name:"Nike Killshot 2 leather",
            category:"Men's Shoe",
            colorAvailable:2,
            img:fifthShoe,
            MRP:7995.00
        },
        {   
            pid:6,
            name:"Nike Air Forc 1*07",
            category:"Men's Shoe",
            colorAvailable:1,
            img:firstShoe,
            MRP:8195.00
        },
    ]
  return (
    <section id="products">
        <div className="container">
            <div className="row">
                {
                    products.map((product,index)=>(
                    <div className="col-lg-4 col-sm-4 col-11 offset-sm-0 offset-1" style={{marginBottom:"3rem"}} key={product.pid}>
                        <div className="card" style={{width:"100%",border:"none"}} >
                            <img className="card-img-top w-100 h-100 mb-1" src={product.img} alt="Card image cap" />
                            <div className="card-body" style={{fontSize:"14px"}}>
                            <p className="card-text" style={{fontWeight:"bold",color:'black'}}>{product.name}</p>
                            <p className="card-text product-category">{product.category}</p>
                            <p className="card-text product-colors">{product.colorAvailable} color</p>
                            <p className="card-text" style={{fontWeight:"bold",color:'black'}}>MRP: ₹ {product.MRP}</p>
                            </div>
                        </div>
                    </div>
                    ))
                }
            
            </div>
        </div>
    </section>
  )
}

export default Products