import { CheckCircle2 } from "lucide-react";
import { ChecklistItem, checklistItems } from "../store/Mock";
import makingImg from '../assets/making.jpg';
import * as strings from '../store/mock.strings.json';
import { motion } from 'framer-motion';

const Process = () => {



    return (<motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut" }} className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">{strings.workflowheader}</h2>
        <div className="flex flex-wrap justify-center">
            <div className="p-2 w-full lg:w-1/2">
                <img src={makingImg} className="mt-10" />
            </div>
            <div className="pt-12 w-full lg:w-1/2">

                {checklistItems.map((item: ChecklistItem, index: number) => (
                    <div key={index} className="flex mb-12">
                        <div className="text-orange-400 mx-6 bg-neutral-100 h-10 w-10 p-2 justify-center items-center rounded-full">
                            <CheckCircle2 />

                        </div>
                        <div>
                            <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                            <p className="text-neutral-950 text-md">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </motion.div>)
}



export default Process;