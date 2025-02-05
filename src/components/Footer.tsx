import { resourcesLinks,communityLinks,platformLinks, Link } from "../store/Mock";
import * as strings from '../store/mock.strings.json';
import {motion} from 'framer-motion';


const Footer = () => {


    return <motion.footer initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut" }} className="mt-20 border-t py-10 border-y-neutral-700">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
            <h3 className="text-md font-semibold mb-4">{strings.resourcesSection}</h3>
            <ul className="space-y-2">
                {resourcesLinks.map((link:Link,index:number)=>(
                    <li key={index}><a className="text-neutral-950 hover:text-orange-400" href={link.href}>{link.text}</a></li>
                ))}
            </ul>
            </div>
            <div>
            <h3 className="text-md font-semibold mb-4">{strings.bakerySection}</h3>
            <ul className="space-y-2">
                {communityLinks.map((link:Link,index:number)=>(
                    <li key={index}><a className="text-neutral-950 hover:text-orange-400" href={link.href}>{link.text}</a></li>
                ))}
            </ul>
            </div>
            <div>
            <h3 className="text-md font-semibold mb-4">{strings.platformSection}</h3>
            <ul className="space-y-2">
                {platformLinks.map((link:Link,index:number)=>(
                    <li key={index}><a className="text-neutral-950 hover:text-orange-400" href={link.href}>{link.text}</a></li>
                ))}
            </ul>
            </div>
        </div>

    </motion.footer>
};


export default Footer;