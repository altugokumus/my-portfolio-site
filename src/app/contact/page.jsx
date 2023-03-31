import React from 'react'

const Contact = () => {
  return (
    <div className='contactmain'>
        <div className='contact'>
            <p><strong>Tel: </strong>0553 409 83 30</p>
            <p><strong>E-mail: </strong>altugokumus@gmail.com</p>
        </div>
        <div className='formcontainer'>
            <form action="none" >
                <input placeholder='Name' type="text" />
                <input placeholder='Email' type="email" />
                <textarea placeholder='Message' name="message" id="" cols="30" rows="10"></textarea>
                <button>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Contact