/** @format */

import React from "react"
import "../styles/ProfilesContainer.css"

const ProfilesContainer = () => {
  return (
    <div className='col-6 col-xs-6 col-md-4 bg-secondary'>
      <div className='profile-nav-bar'></div>
      <div className='profile-search-bar'>
        <div>
          <i className='bi bi-search'></i>
        </div>
      </div>
      <div className='profiles-container'></div>
    </div>
  )
}

export default ProfilesContainer
