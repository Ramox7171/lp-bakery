import { Testimonial, testimonials } from "../store/Mock";
import * as strings from '../store/mock.strings.json';
import { motion } from 'framer-motion';


const Testimonials = () => {

    return <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut" }} className="mt-10 tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">{strings.testimonialsHeading}</h2>
        <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial: Testimonial, index: number) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                    <div className="bg-neutral rounded-md p-6 text-md border text-neutral-950 border-y-neutral-800 font-light">
                        <p>{testimonial.text}</p>
                        <div className="flex mt-8 items-start">
                            <img src={testimonial.image} className="w-12 h-12 mr-6 rounded-full border border-neutral-300" alt="" />
                        </div>
                        <h6 className="">{testimonial.user}</h6>
                        <span className="text-sm font-normal italic text-neutral-950">{testimonial.location}</span>
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
};


export default Testimonials;