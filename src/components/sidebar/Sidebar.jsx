import "./sidebar.css"
import { LineStyle , Timeline ,TrendingUp ,PermIdentity,ShowChart,Storefront,AttachMoney,Mail,DynamicFeed,ChatBubble,WorkOutline,Report }  from  '@material-ui/icons'

export default function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
                <li className="sidebarListItems active">
                    <LineStyle className="sidebarIcon" />
                    Home
                </li>
                <li className="sidebarListItems">
                    <Timeline  className="sidebarIcon" />
                    Analytics
                </li>
                <li className="sidebarListItems">
                    <TrendingUp className="sidebarIcon"  />
                    Sales
                </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
                <li className="sidebarListItems">
                    <PermIdentity className="sidebarIcon" />
                    Users
                </li>
                <li className="sidebarListItems">
                    <Storefront  className="sidebarIcon" />
                   Products
                </li>
                <li className="sidebarListItems">
                    <AttachMoney className="sidebarIcon"  />
                    Transaction
                </li>
                <li className="sidebarListItems">
                    <TrendingUp className="sidebarIcon"  />
                    Reports
                </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notification</h3>
            <ul className="sidebarList">
                <li className="sidebarListItems ">
                    <Mail className="sidebarIcon" />
                   Mail
                </li>
                <li className="sidebarListItems">
                    <DynamicFeed  className="sidebarIcon" />
                   Feedback
                </li>
                <li className="sidebarListItems">
                    <ChatBubble className="sidebarIcon"  />
                    Message
                </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
                <li className="sidebarListItems ">
                    <WorkOutline className="sidebarIcon" />
                   Manage
                </li>
                <li className="sidebarListItems">
                    <ShowChart  className="sidebarIcon" />
                   Analitics
                </li>
                <li className="sidebarListItems">
                    <Report className="sidebarIcon"  />
                   Reports
                </li>
            </ul>
        </div>
        
    </div>
    </div>
  )
}
