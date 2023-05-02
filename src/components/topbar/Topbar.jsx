import React from 'react'
import "./topbar.css"
import  { NotificationsNone , Language , Settings } from '@material-ui/icons';
export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarwrapper">
            <div className="topbarleft">
                <span className="logo">reactadmin</span>
            </div>
            <div className="topbaright">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBag">2</span>
               </div>
               <div className="topbarIconContainer">
                    <Language />
                    <span className="topIconBag">2</span>
               </div>
               <div className="topbarIconContainer">
                    <Settings />
                    
               </div>
               <img src="data:image/jpeg;base64,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" alt="" className="topAvtar" />
            </div>
        </div>
      
    </div>
  )
}
