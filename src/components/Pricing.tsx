import { CheckCircle2 } from "lucide-react";
import { PricingOption,pricingOptions } from "../store/Mock";
import * as strings from '../store/mock.strings.json';

const Pricing = () => {




    return (<div className="mt-20">
       <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">{strings.pricing}</h2>
       <div className="flex flex-wrap">
        {pricingOptions.map((option:PricingOption, index:number)=>(
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                <div className="p-10 border border-neutral-700 rounded-xl">
                    <p className="text-4xl">{option.title}
                        {option.title === "Premium" && (
                            <span className="bg-orange-400 text-transparent bg-clip-text text-xl mb-2 ml-2">(Most Popular)</span>
                        )}
                    </p>
                    <p className="mb-8">
                        <span className="text-5xl mt-6 mr-2">{option.price}</span>
                        <span className="text-orange-400 tracking-tight">/Month</span>
                    </p>
                    <ul>
                        {option.features.map((feature:string,index:number)=>(
                            <li key={index} className="mt-8 flex items-center">
                                <CheckCircle2 />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-400 border border-orange-400 rounded-xl transition duration-200">{strings.subBtn}</a>
                </div>

            </div>
        ))}
       </div>
    </div>)
};






export default Pricing