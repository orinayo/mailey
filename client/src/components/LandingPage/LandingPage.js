import React from 'react'

const LandingPage = () => {
  return (
    <div style={{
      textAlign: 'center',
      fontSize: '3rem',
      fontWeight: '300',
      height: '90vh',
      backgroundImage: `url(http://res.cloudinary.com/orinayo/image/upload/v1534916122/hero.jpg)`,
      backgroundSize: 'cover'}} >
      <h1 style={{fontSize: '7rem', fontWeight: '300', color: '#c40c21', paddingTop: '8rem', marginTop: '0'}}>
        Mailey
      </h1 >
      Collect feedback from your users
    </div>
  )
}

export default LandingPage
