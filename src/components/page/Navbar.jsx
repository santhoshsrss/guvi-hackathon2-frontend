import './navbar.css'
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
export function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className='navcontainer'>
        <span className='logo'>Equipment Rental portal</span>
        <div className='navitems'>
          <Button onClick={() => navigate("/contact")} color="inherit">Contact</Button>
          <button className='navbutton'>Register</button>
          <button className='navbutton'>Login</button>
        </div>
      </div>
    </div>
  );
}
