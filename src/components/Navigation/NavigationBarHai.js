import React , {useState} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
  } from 'reactstrap';


function NavigationBarHai(props){
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  const markAllComplete = ()=>{
    props.markAllAsComplete();
  }
  const markAllInComplete = ()=>{
    props.markAllAsInComplete();
  }
  const deleteCopleted = ()=>{
    props.deleteAllcompleted();
  }
    return(
        <div className="container-fluid mt-4 text-red">
      <Navbar  dark color="info" expand="md" className="flex-auto">
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
            <NavbarBrand className="mx-auto pr-4" onClick={markAllComplete}>Mark All As Complete</NavbarBrand>
            </NavItem>
            <NavItem>
              <NavbarBrand className="pr-4 pl-4" onClick={markAllInComplete}>Mark All As Incomplete</NavbarBrand>
            </NavItem>
            <NavItem>
              <NavbarBrand className="mx-auto pl-4" onClick={deleteCopleted}>Delete All Completed Todo</NavbarBrand>
            </NavItem>
            
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
    );
}

export default NavigationBarHai;