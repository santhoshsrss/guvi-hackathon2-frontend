import './header.css'
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import ChairIcon from '@mui/icons-material/Chair';
import TextField from '@mui/material/TextField';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {useState} from 'react'
import {format} from 'date-fns'
import SearchIcon from '@mui/icons-material/Search';

export function Header({type}) {
  const [opendate, setopendate] = useState(false)
  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);


  return (
    <div className='header'>
      <div className={type==="product"? "headercontainer-listmode":"headercontainer" }>
         <div className="headerlist">
          <div className="headerlistitem">
              <CameraEnhanceIcon />
              <span>Electronic Items</span>
          </div>
          <div className="headerlistitem">
              <ChairIcon />
              <span>Home Decor</span>
          </div>
        </div>
        {type !=="product" &&
        <>
         
         <h1 className="headertitle">
          A SIMPLE DISCOUNT MAKE EVERYONE HAPPY!
        </h1>
        <p className="headerdescription">
          Renting also know as hiring or letting, is an agreement 
          where a payment is made for the temporary use of 
          good, service or property owned by another.
        </p>
        <button className="headerbtn">Sign in/Register</button>
        <div className="headersearch">
          <div className="headersearchitem">
            <SearchIcon color = "primary"/>
            <input 
            type="text" 
            placeholder='please search here'
            className='heardersearchinput'
            />
          </div>
          <div className="headersearchitem">
            <CalendarMonthIcon color = "primary"/>
            <span
              onClick={()=>setopendate(!opendate)} 
              className='headersearchtext'>
              {`${format(date[0].startDate, "dd/MM/yyyy")} to 
              ${format(date[0].endDate, "dd/MM/yyyy")} `}
            </span>
            
            {opendate && <DateRange
                editableDateInputs={true}
                onChange={item => setdate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className='date'
            />}
          </div>
          <div className="headersearchitem">
              <button className='headersearchbtn'>Search</button>
          </div>
        </div>
        </>
        }
      </div>
       
    </div>
  );
}
