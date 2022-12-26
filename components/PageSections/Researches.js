function Researches({researches}) {
    return <div className="flow-root">
        <ul className="-mb-8">

            {researches.map((research, index) => <li key={index}>
                <div className="relative pb-8">
                    {index !== (researches.length - 1) && <span className="absolute top-6 left-6 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700" aria-hidden="true"/>}

                    <div className="relative flex items-start space-x-3">
                        <div className="relative">
                            <img
                                className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800 border shadow flex items-center justify-center ring-8 ring-white dark:ring-gray-900"
                                src={research.image}
                                alt=""/>
                        </div>
                        <div className="min-w-0 flex-1">
                            <div>
                                <div className="text-lg">
                                    <h3 className="font-semibold text-gray-800 dark:text-gray-100">{research.title}</h3>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-600 dark:text-gray-400">{research.company}</p>
                                </div>
                                <p className="mt-0.5 text-sm text-gray-500">
                                    {research.start} - {research.end}
                                </p>
                            </div>
                            <div className="mt-2 text-sm text-gray-700 dark:text-gray-400">
                                <p>
                                    {research.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>)}
        </ul>
    </div>
}

export default Researches;