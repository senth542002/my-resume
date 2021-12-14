import Header from '../components/header'
import Summary from '../components/summary'
import Techologies from '../components/technologies'
import Technologies from '../components/technologies'

function Layout() {
    return (
        <div className="p-6  bg-white">
            <div><Header/></div>
            <div><Summary/></div>
            <div><Technologies/></div>
            <div>Achievements</div>
            <div>Company Experience</div>
            <div>Project Summary</div>
        </div>
    )
}

export default Layout