import Header from '../components/header'
import Summary from '../components/summary'
import Technologies from '../components/technologies'
import Accomplishments from '../components/accomplishments'
import Experience from '../components/experience'
import ProjectSummary from '../components/projectSummary'

function Layout() {
    return (
        <div className="p-6  bg-white">
            <div><Header /></div>
            <div><Summary /></div>
            <div><Technologies /></div>
            <div><Accomplishments /></div>
            <div><Experience /></div>
            <div><ProjectSummary /></div>
        </div>
    )
}

export default Layout