function Accomplishments() {

    let accomplishmentsData = require('../public/data/accomplishments.json');

    return (
        <div className="border-b mb:0 mt-1">
            <div className="text-black font-bold text-base mb-2">Accomplishments</div>
            <div className="px-8">
                <ul className="list-disc pb-0 mb-1.5">
                        {
                            accomplishmentsData.data.map( (accomplishment) => {
                            return (
                                <li className="mb-0">
                                    {accomplishment}
                                </li>
                                )
                            })
                        }
                </ul>
            </div>
        </div>
    )
}

export default Accomplishments