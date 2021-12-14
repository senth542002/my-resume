
function ProjectSummary() {

    let summaryInfo = require('../public/data/projectSummary.json');
    return (

        <div className="border-b mb:0 mt-1">
            <div className="text-black font-bold text-base mb-2">Project Summary</div>
            <div className="px-2">

                {
                    summaryInfo.data.map(summary => {
                        return (

                            <div>
                                <div className="p-1 text-black bg-grey-100 font-bold lg:mr-10">
                                    {summary.project} - 
                                    <span className="text-gray-600"> {summary.company}</span>
                                </div>
                                <div className="py-1 px-1.5 flex bg-gray-100 justify-between lg:mr-10 mb-2 text-gray-600 text-sm">
                                    <div>Role: {summary.role}</div>
                                    <div>{summary.duration}</div>
                                </div>
                                <div className="lg:mr-10 px-1.5">{summary.summary}</div>
                                <div className="m-2 text-small text-gray-600 italic px-1.5"> {summary.technologies}</div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default ProjectSummary