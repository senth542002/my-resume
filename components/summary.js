

function Summary() {

    let summaryData = require('../public/data/summary.json');
    return (
        <div className="justify-between lg:mb-2 md:mb-0 sm:mb-0">
            <div className="border-b mb:0 mt-1">
                <div className="text-black font-bold text-base mb-2">Summary</div>
                <div className="px-8">
                    <ul className="list-disc pb-0 mb-1.5">
                        {
                            summaryData.data.map( (summary) => {
                            return (
                                <li className="mb-0">
                                    {summary}
                                </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Summary