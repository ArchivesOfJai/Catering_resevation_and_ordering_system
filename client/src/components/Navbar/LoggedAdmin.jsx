import React from 'react'

function LoggedAdmin() {
  return (
    <div className="navbar-nav mx-auto">
            <a className="nav-link active" aria-current="page" href="/admin" style={{fontFamily:'"Inter", sans-serif',fontOpticalSizing:"auto",fontWeight:"400",fontStyle:"normal"}}>
              Add Products
            </a>
            <a className="nav-link" href="" style={{fontFamily:'"Inter", sans-serif',fontOpticalSizing:"auto",fontWeight:"400",fontStyle:"normal"}}>
              view orders
            </a>
            <a className="nav-link" href="" style={{fontFamily:'"Inter", sans-serif',fontOpticalSizing:"auto",fontWeight:"400",fontStyle:"normal"}}>
              product list
            </a>
          </div>
  )
}

export default LoggedAdmin
