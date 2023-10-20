import React from 'react'
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch,useSelector } from 'react-redux';
import{actionCreator} from "../Store"
import { bindActionCreators } from 'redux';
import './Module.css';



function Header() {
  const country = useSelector(state => state.country)
  const dispatch = useDispatch()
  const {changeCountry}=bindActionCreators(actionCreator,dispatch)


  return (
    

    
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-nav ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Daily News</Link> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active Hover_over" aria-current="page" to="/">Home</Link> 
              </li>
              <li className="nav-item"><Link className="nav-link Hover_over" to="/business"> Business</Link> </li>
              <li className="nav-item"><Link className="nav-link Hover_over" to="/entertainment"> Entertainment</Link> </li>
              <li className="nav-item"><Link className="nav-link Hover_over" to="/general"> General</Link> </li>
              <li className="nav-item"><Link className="nav-link Hover_over" to="/health"> Health</Link> </li>
              <li className="nav-item"><Link className="nav-link Hover_over" to="/science"> Science</Link> </li>
              <li className="nav-item"><Link className="nav-link Hover_over" to="/sports"> Sports</Link> </li>
              <li className="nav-item"><Link className="nav-link Hover_over" to="/technology"> Technology</Link> </li>
            </ul>
            
          </div>
        </div>
        <Dropdown >
      <Dropdown.Toggle variant="warning" id="dropdown-basic ">
        {country==="us"?"USA":country==="ch"?"CHINA":country==="ru"?"RUSSIA":country==="ar"?"ARGENTINA":country==="gr"?"GREECE":country==="za"?"SOUTH AFRICA":"INDIA"}
        
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>{changeCountry("us")}} >USA</Dropdown.Item>
        <Dropdown.Item onClick={()=>{changeCountry("cn")}}>CHINA</Dropdown.Item>
        <Dropdown.Item onClick={()=>{changeCountry("ca")}}>CANADA</Dropdown.Item>
        <Dropdown.Item onClick={()=>{changeCountry("pk")}}>PAKISTAN</Dropdown.Item>
        <Dropdown.Item onClick={()=>{changeCountry("au")}}>AUSTRALIA</Dropdown.Item>
        <Dropdown.Item onClick={()=>{changeCountry("fr")}}>FRANCE</Dropdown.Item>
        <Dropdown.Item onClick={()=>{changeCountry("in")}}>INDIA</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </nav>

  )
}

export default Header;
