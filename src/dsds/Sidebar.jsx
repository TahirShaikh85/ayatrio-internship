import React from 'react'

const Sidebar = () => {
  return (
    <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-4 px-0" style={{width:"18%"}}>
            <div className="d-flex flex-column align-items-center align-items-sm-start pt-2 text-white min-vh-100">
                <ul className="nav nav-pills flex-column mb-sm-auto  align-items-center align-items-sm-start" id="menu">
                   
                    <li>
                        <ul className="collapse show nav flex-column pb-4 ms-1 border-bottom" id="submenu1" data-bs-parent="#menu">
                            <li className="w-100 mb-1">
                                <a href="#" className="nav-link text-black p-0 "> Lifestyle </a>
                            </li>
                            <li className="w-100  mb-1">
                                <a href="#" className="nav-link text-black p-0 "> Jordan </a>
                            </li>
                            <li className="w-100  mb-1">
                                <a href="#" className="nav-link text-black p-0 "> Running </a>
                            </li>
                            <li className="w-100  mb-1">
                                <a href="#" className="nav-link text-black p-0 "> Basketball </a>
                            </li>
                            <li className="w-100  mb-1">
                                <a href="#" className="nav-link text-black p-0 "> Football </a>
                            </li>
                            <li className="w-100">
                                <a href="#" className="nav-link text-black p-0 "> Training & Running </a>
                            </li>
                            <li className="w-100  mb-1">
                                <a href="#" className="nav-link text-black p-0 "> Skateboarding </a>
                            </li>
                            <li className="w-100  mb-1">
                                <a href="#" className="nav-link text-black p-0 "> Goalf </a>
                            </li>
                            <li className="w-100  mb-1">
                                <a href="#" className="nav-link text-black p-0 "> Tennis </a>
                            </li>
                            <li className="w-100  mb-1">
                                <a href="#" className="nav-link text-black p-0 "> Athletics </a>
                            </li>
                            <li className="w-100  mb-1">
                                <a href="#" className="nav-link text-black p-0 "> Walking </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <hr />
                <div className="dropdown pb-4">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                        <span className="d-none d-sm-inline mx-1">loser</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col py-3">
            Content area...
        </div>
    </div>
</div>
  )
}

export default Sidebar