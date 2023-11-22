import React from 'react'


const Sidebar = () => {
    const sizes = [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5,5.5]
    const links = ['Jordan','Running','Basketball','Training & Running','Skateboarding', 'Goalf','Tennis','Athletics','Walking']
return (
<section id="sidebar">
   <div>
      <ul className='pb-4'>
        {
            links.map((link,index)=>(
                <li key={index}><a href="#">{link}</a></li>
            ))
        }
      </ul>
   </div>
   <div>
      <div className="accordion p-1" id="filterAccordian">

         <div className="accordion-item" style={{border:"none"}}>
            <h2 className="accordion-header" id="genderAccordianHeading">
               <button className="accordion-button pt-2 border-top" type="button" data-bs-toggle="collapse" data-bs-target="#genderCollapse" aria-expanded="true" aria-controls="genderCollapse" style={{padding:0}}>
               Gender
               </button>
            </h2>
            <div id="genderCollapse" className="accordion-collapse collapse show" aria-labelledby="genderAccordianHeading" data-bs-parent="#filterAccordian">
               <div className="accordion-body" style={{paddingLeft:"0"}}>
                  <div className="selector mb-1">
                     <input type="checkbox" className='modiefied-check' name="male" id="male" /> <label htmlFor="male" className='fs-6'>Male</label>
                  </div>
                  <div className="selector mb-1">
                     <input type="checkbox" className='modiefied-check' name="women" id="women" /> <label htmlFor="women" className='fs-6'>Women</label>
                  </div>
                  <div className="selector mb-1">
                     <input type="checkbox" className='modiefied-check' name="unisex" id="unisex" /> <label htmlFor="unisex" className='fs-6'>Unisex</label>
                  </div>
               </div>
            </div>
         </div>

         <div className="accordion-item mt-3" style={{border:"none"}}>
            <h2 className="accordion-header" id="priceAccordianHeading">
               <button className="accordion-button pt-2 border-top" type="button" data-bs-toggle="collapse" data-bs-target="#priceCollapse" aria-expanded="true" aria-controls="priceCollapse" style={{padding:0}}>
               Shop By Price
               </button>
            </h2>
            <div id="priceCollapse" className="accordion-collapse collapse show" aria-labelledby="priceAccordianHeading" data-bs-parent="#filterAccordian">
               <div className="accordion-body" style={{paddingLeft:"0"}}>
                  <div className="selector mb-1">
                     <input type="checkbox" className='modiefied-check' name="price1" id="price1" /> <label htmlFor="price1" className='fs-6'>Under ₹ 2 500.00</label>
                  </div>
                  <div className="selector mb-1 d-flex">
                     <input type="checkbox" className='modiefied-check mr-3' name="price2" id="price2" /> <label htmlFor="price2" className='fs-6'>₹ 2 501.01 - ₹ 7 500.00</label>
                  </div>
                  <div className="selector mb-1 d-flex">
                     <input type="checkbox" className='modiefied-check' name="price3" id="price3" /> <label htmlFor="price3" className='fs-6'>₹ 7 501.01 - ₹ 12 999.00</label>
                  </div>
                  <div className="selector mb-1">
                     <input type="checkbox" className='modiefied-check' name="price4" id="unisex" /> <label htmlFor="unisex" className='fs-6'>Over ₹ 13 000</label>
                  </div>
               </div>
            </div>
         </div>

         <div className="accordion-item mt-3" style={{border:"none"}}>
            <h2 className="accordion-header" id="salesAccordian">
               <button className="accordion-button pt-2 border-top" type="button" data-bs-toggle="collapse" data-bs-target="#salesCollapse" aria-expanded="true" aria-controls="salesCollapse" style={{padding:0}}>
               Sale & Offer
               </button>
            </h2>
            <div id="salesCollapse" className="accordion-collapse collapse show" aria-labelledby="salesAccordian" data-bs-parent="#filterAccordian">
               <div className="accordion-body" style={{paddingLeft:"0"}}>
                  <div className="selector mb-1">
                     <input type="checkbox" className='modiefied-check' name="sale" id="sale" /> <label htmlFor="sale" className='fs-6'>Sale</label>
                  </div>
               </div>
            </div>
         </div>


         <div className="accordion-item mt-3" style={{border:"none"}}>
            <h2 className="accordion-header" id="sizeAccordianHeading">
               <button className="accordion-button pt-2 border-top" type="button" data-bs-toggle="collapse" data-bs-target="#sizeCollapse" aria-expanded="true" aria-controls="sizeCollapse" style={{padding:0}}>
               Size
               </button>
            </h2>
            <div id="sizeCollapse" className="accordion-collapse collapse show" aria-labelledby="sizeAccordianHeading" data-bs-parent="#filterAccordian">
                <div className="accordion-body" style={{ paddingLeft: "0" }}>
                    <div className="row m-auto">
                  {
                  sizes.map((size) => (
                  <div key={size} className="col-md-4 size-box mb-1">
                     {size}
                  </div>
                  ))
                  }
                    </div>
                </div>
            </div>
        </div>

   </div>
   </div>
</section>
)
}
export default Sidebar