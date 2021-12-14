
function Experience() {

    let experienceInfo = require('../public/data/experience.json');

    return (
        <div className="border-b mb:0 mt-1">
            <div className="text-black font-bold text-base mb-2">Company Experience</div>
            <div className="px-8">
                {
                    experienceInfo.data.map(experience => {
                        return(
                            <div className="flex justify-between lg:mr-36">
                                <div className="col-span-4 text-black">{experience.key}</div>
                                <div className="">{experience.value}</div>
                            </div>
                        )   
                    })
                }
            </div>
        </div>
    )
}

export default Experience