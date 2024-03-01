import React from 'react'
import Button from 'react-bootstrap/Button';

export default function Card() {
  return (
    <div>
     <div className="card" style={{"width":"18rem", "margin":"20px" , "maxHeight": "360px"}}>
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is some imported text.</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    <div className='container w-150'>
          <select className='m-2 h-100  bg-success rounded'>
            { Array.from(Array(6), (e, i)=>{
              return(
                <option  value={i+1}>{i+1}</option>
              )
            })}
          </select>

          <select className='m-2 h-100  bg-success rounded'>
              
              <option value="Half">Half</option>
              <option value="Full">Full</option>

          </select>
          <div className=' d-inline h-100 fs-6 bg-succes rounded'>
             Total price:
          </div>
    </div>

  </div>
</div>
   </div>
  )
}
