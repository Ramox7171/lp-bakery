
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import * as strings from '../store/mock.strings.json';
import {motion} from 'framer-motion';

const HeroSection = () => {

    return (
        <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut" }} className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
               {strings.heading}
                
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">{strings.subHeading}</p>
            <div className="flex justify-center my-10">
                <motion.a href="#" whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 200, damping: 10 }} whileHover={{ scale: 1.1 }} className="bg-orange-300 py-3 px-4 mx-3 rounded-md">
                    {strings.subStartBtn}
                </motion.a>
                <motion.a href="#" whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 200, damping: 10 }} whileHover={{ scale: 1.1 }} className="border py-3 px-4 rounded-md ">
                    {strings.orderSample}
                </motion.a>


            </div>
            <div className="flex mt-10 justify-center">
                <video autoPlay loop muted className="rounded-lg w-1/2  mx-2 my-4">
                <source src={video1} type="video/mp4" />
                Your browser not support videos
                </video>
                <video autoPlay loop muted className="rounded-lg w-1/2  mx-2 my-4">
                <source src={video2} type="video/mp4" />
                Your browser not support videos
                </video>
            </div>
        </motion.div>
    )
}


export default HeroSection;