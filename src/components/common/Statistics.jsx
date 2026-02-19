import data from "@data/statistics.json";

/**
 * @typedef {Object} StatisticsProps
 * @prop {string} [className]
 */

/**
 * @param {StatisticsProps} props
 */

function Statistics({ className }) {
    return (
        <div className={`statistics flex items-center gap-3 flex-wrap ${className}`}>
            {
                data.map((statistic, index) => (<div className="statistics-card p-3 md:p-5 rounded-md max-sm:text-center bg-grey-10 border border-grey-15 flex-1 max-md:last-of-type:w-full max-md:last-of-type:flex-auto" key={statistic.id || index}>
                    <div className="text-2xl md:text-3xl 2xl:text-4xl font-bold mb-1">{statistic.value}</div>
                    <p className="text-sm md:text-base lg:text-[16px]!">{statistic.name}</p>
                </div>))
            }
        </div >
    )
}

export default Statistics;