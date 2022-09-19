/** @format */

import React from "react"
import "../styles/HomePage.css"
import ProfilesContainer from "../components/ProfilesContainer"
import ChatContainer from "../components/ChatContainer"

const HomePage = () => {
  return (
    <div className='main-container d-flex'>
      <ProfilesContainer />
      <ChatContainer />
    </div>
  )
}

export default HomePage
