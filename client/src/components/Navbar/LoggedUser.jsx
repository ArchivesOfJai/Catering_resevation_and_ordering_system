import React from 'react'

function LoggedUser() {
  return (
    <div className="navbar-nav mx-auto">
            <a className="nav-link active" aria-current="page" href="/user-dashboard" style={{fontFamily:'"Inter", sans-serif',fontOpticalSizing:"auto",fontWeight:"400",fontStyle:"normal"}}>
              Menu
            </a>
            <a className="nav-link" href="" style={{fontFamily:'"Inter", sans-serif',fontOpticalSizing:"auto",fontWeight:"400",fontStyle:"normal"}}>
              Orders
            </a>
            <a className="nav-link" href="/recents" style={{fontFamily:'"Inter", sans-serif',fontOpticalSizing:"auto",fontWeight:"400",fontStyle:"normal"}}>
              Recent Event
            </a>
          </div>
  )
}

export default LoggedUser
