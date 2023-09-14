import React from 'react'
import "./Friends.css"

function Friends() {
  return (
    <div className="chat">
        <img src="assets/person/1.jpeg" alt="" className="friendAccountImg" />
        <div className="chatCurrentMessage">
            <div className="friendInfo">
                <div className="friendName"> Ayatsuki </div>
                <div className="chatDate">2023/07/22</div>
            </div>
        </div>
    </div>
  )
}

export default Friends