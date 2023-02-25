import React from 'react'
import paper from '../images/paper.jpg';

function Contact() {
  return (
    <>
    <div className="form_container">
        <img src={paper} alt="heart" />
        <form action="https://formspree.io/f/xrgdrndg" method='POST'>
            <h2 className='contact'>Contact Us</h2>
           <input type="text" name="username" placeholder='Username' autoComplete='off' required />
           <input type="email" name="Email" placeholder='Email' autoComplete='off' required />
            <textarea name="massage"  cols="30" rows="6" autoComplete='off' placeholder='Write your massage here ' required></textarea>
            <input type="submit" value='send' className='submit' />
        </form>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121073.4173431826!2d73.78525379701044!3d18.504290009261073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0d41669600f%3A0xb7b0e1c766b88c12!2sPharmaceutical%20Company%20of%20Pune!5e0!3m2!1shi!2sin!4v1675945805911!5m2!1shi!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
  )
}

export default Contact
