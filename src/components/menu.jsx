import React from 'react'


const Menu = ({items, setTotal, persons, setPersons, setSelectedPersons }) => {
  return (
    <main className='product-space'>
        <div className='container'>
        <div className="row">
        {
            items.map((menuItems) => {
                const {id,title,img,desc,price,starter,desert} = menuItems;
                return (
                    <div className='box col-md-12'>
                       <article key={id} className="main-div">
                       <div className="main-img">
                            <img src={img} alt="" />
                            </div>
                            <div className="content">
                                 <h4>{title}</h4>
                                    <h5>{starter}</h5>
                                    <h5>{desert}</h5>
                                    <p>{desc}</p>
                                <div className='col-md-3'>
                                <div className='d'>
                                <button ><div className='drink'><img src='https://5.imimg.com/data5/JJ/TS/EK/SELLER-61942504/juice-glass.jpg' /></div></button>
                                <button ><div className='drink '><img src='https://www.freeiconspng.com/thumbs/wine-glass-png/wine-glass-png-image-5.png' /></div></button>
                                <button ><div className='drink'><img src='https://www.myboelter.com/media/catalog/product/cache/f79e4693fce3d6d477fd90cf3f54d2bf/2/3/234505.24460.jpg' /></div></button>

                                <h6>${price}</h6>
                                <button className='select' type='submit' onClick={() => {
                                    setTotal((prev) => prev + price)
                                    setPersons(prev => {
                                        return prev.map(person => {
                                            return person.selected ? {
                                                ...person,
                                                orders: [...person.orders, {
                                                    title,
                                                    id,
                                                    price
                                                }]
                                            } : person
                                        })
                                    })
                                }}>Select</button>
                                </div>
                                </div>
                            </div>

                       </article>
                        
                    </div>
                )
    
            })
       }
        </div>
    

    </div>
    </main>
  )
}

export default Menu