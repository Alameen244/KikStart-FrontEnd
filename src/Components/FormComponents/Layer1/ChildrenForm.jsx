import React from 'react'
import { Container } from 'react-bootstrap'

const TargetIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#9CA3AF"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="2" />
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
  </svg>
);
const ChildrenForm = () => {
  return (
    <div style={{width:"650px", padding:"0px 20px 0px 60px" ,borderLeft:"1px solid #E5E5E5"}}>
      <div>
        <h2>Children Details</h2>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </div>
      <div className='w-580px'>
        <div className= 'd-flex flex-column border rounded-xl p-3 mb-3'>
          <label className=''>Full Name</label>
          <input type="text" className='outline-0' />
        </div>
        <div className="d-flex flex-column border rounded-xl p-3 mb-3 position-relative">
          <label>Location</label>

          <input
            type="text"
            className="outline-0"
            style={{ paddingRight: "40px" }}
          />

          <div
            style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer"
            }}
          >
            <TargetIcon />
          </div>
        </div>
        <div className= 'd-flex flex-column border rounded-xl p-3 mb-3'>
          <label className=''>Age</label>
          <input type="text" className='outline-0' />
        </div>
        <div className= 'd-flex flex-column border rounded-xl p-3 mb-3'>
          <label className=''>Food Habit</label>
          <input type="text" className='outline-0' />
        </div>
        <div className= 'd-flex flex-column border rounded-xl p-3 mb-3'>
          <label className=''>Have Any Type of Allergy?</label>
          <input type="dropdown" className='outline-0' />
        </div>
        <div className= 'd-flex flex-column border rounded-xl p-3 mb-3'>
          <label className=''>Allergy Details</label>
          <input type="text" className='outline-0' />
        </div>
        <div className= 'd-flex flex-column border rounded-xl p-3 mb-3'>
          <label className=''> Any Prolong Details</label>
          <input type="text" className='outline-0' />
        </div>
        <div className='d-flex items-center border rounded-xl p-3 mb-3'>
          <div>
            <p className="mb-0">Profile Image</p>
            <p className="text-gray-400">
              Upload image Within size of 5MB
            </p>
          </div>
          <label className="border rounded-xl px-4 py-2 cursor-pointer hover:bg-gray-100" style={{marginLeft: "auto"}}>
            UPLOAD
            <input type="file" className="hidden" />
          </label>
        </div>
      </div>
      <button className="bg-red-500 text-white px-4 py-2 hover:bg-red-600" style={{borderRadius:'50px'}}>Next</button>
    </div>
  )
}

export default ChildrenForm
