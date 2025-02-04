import { Feature, features } from "../store/Mock";
import * as strings from '../store/mock.strings.json';



const FeatureSection = () => {



    return (<div className="relative mt-20 border-b border-neutral-800 min-h-[800px] px-20">
        <div className="text-center">
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
               {strings.cta}
            </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
            {features.map((feature: Feature, index: number) => (
                <div key={index} className="w-full sm:1/2 lg:w-1/3">
                    <div className="flex">
                        <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-100 text-orange-700 justify-center items-center rounded-full">
                            {feature.icon}
                        </div>
                        <div>
                            <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                            <p className="text-md p-2 mb-20 text-neutral-950">{feature.description}</p>
                        </div>

                    </div>
                </div>

            ))}
        </div>
    </div>);
}



export default FeatureSection;