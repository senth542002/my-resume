import Header from '../components/header'
import Summary from '../components/summary'

function Layout() {
    return (
        <div className="p-6  bg-white">
            <div><Header/></div>
            <div><Summary/></div>
            <div>Techologies</div>
            <div>Achievements</div>
            <div>Company Experience</div>
            <div>Project Summary</div>
        </div>
    )
}

export default Layout