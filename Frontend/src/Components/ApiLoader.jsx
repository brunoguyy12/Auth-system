import React from 'react'
import classNames from 'classnames';

const ApiLoader = ({color}) => {
    // console.log(color);

  return (
    <div className='w-7 h-7 rounded-full animate-spin' style={{border: `2px solid ${color}`, borderRight: '2px solid transparent'}}>
    </div>
  )
}

export default ApiLoader