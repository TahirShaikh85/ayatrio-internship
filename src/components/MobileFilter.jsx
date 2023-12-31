import React from 'react'

const MobileFilter = () => {
  return (
   <>
   <div className="filter">
    <button className="btn btn-default" type="button" data-toggle="collapse" data-target="#mobile-filter" aria-expanded="false" aria-controls="mobile-filter">Filters<span className="fa fa-filter pl-1"></span></button>
</div>
<div id="mobile-filter">
    <div>
        <h6 className="p-1 border-bottom">Home Furniture</h6>
        <ul>
            <li><a href="#">Living</a></li>
            <li><a href="#">Dining</a></li>
            <li><a href="#">Office</a></li>
            <li><a href="#">Bedroom</a></li>
            <li><a href="#">Kitchen</a></li>
        </ul>
    </div>
    <div>
        <h6 className="p-1 border-bottom">Filter By</h6>
        <p className="mb-2">Color</p>
        <ul className="list-group">
            <li className="list-group-item list-group-item-action mb-2 rounded"><a href="#" >
                <span className="fa fa-circle pr-1" id="red"></span>Red
            </a></li>
            <li className="list-group-item list-group-item-action mb-2 rounded"><a href="#">
                <span className="fa fa-circle pr-1" id="teal"></span>Teal
            </a></li>
            <li className="list-group-item list-group-item-action mb-2 rounded"><a href="#">
                <span className="fa fa-circle pr-1" id="blue"></span>Blue
            </a></li>
        </ul>
    </div>
    <div>
        <h6>Type</h6>
        <form className="ml-md-2">
            <div className="form-inline border rounded p-sm-2 my-2">
                <input type="radio" name="type" id="boring" />
                <label for="boring" className="pl-1 pt-sm-0 pt-1">Boring</label>
            </div>
            <div className="form-inline border rounded p-sm-2 my-2">
                <input type="radio" name="type" id="ugly" />
                <label for="ugly" className="pl-1 pt-sm-0 pt-1">Ugly</label>
            </div>
            <div className="form-inline border rounded p-md-2 p-sm-1">
                <input type="radio" name="type" id="notugly" />
                <label for="notugly" className="pl-1 pt-sm-0 pt-1">Not Ugly</label>
            </div>
        </form>
    </div>
</div>
   </>
  )
}

export default MobileFilter