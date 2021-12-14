function Technologies(){

    let technologiesInfo = require('../public/data/technologies.json');

    return (
        <div className="border-b mb:0 mt-1">
            <div className="text-black font-bold text-base mb-2">Technologies</div>
            <div className="px-2">
                    {
                        technologiesInfo.data.map(techInfo => {
                            return (
                                <div className="grid grid-cols-5 gap-1 mb-1 ml-2">
                                    <div className="text-black border-b border-dashed">{techInfo.key}</div>
                                    <div className="italic col-span-4 border-b border-dashed">{techInfo.value}</div>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    )
}

export default Technologies