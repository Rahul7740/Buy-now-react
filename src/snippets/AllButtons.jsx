import React from 'react'

const AllButtons = (props) => {
  return (
    <button className='all-btns'>
      <h5 className='all-btn-headings'>
        {props.name}
      </h5>
    </button>
  )
}

export default AllButtons
