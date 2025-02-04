
import { Menu, X, Croissant } from 'lucide-react';
import { useState } from 'react';
import { navItems } from '../store/Mock.tsx'
import { NavItem } from '../store/Mock.tsx';
import * as strings from '../store/mock.strings.json';
import {motion} from 'framer-motion';




const Navbar = () => {

    const [mobileOpen, setMobileOpen] = useState<boolean>(false);

    const toggleNavbar = () => {
        setMobileOpen(!mobileOpen);
    }


    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut" }} className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <Croissant />
                        <span className="text-xl tracking-tight">{strings.companyName}</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item: NavItem, index: number) => (
                            <li key={index}>
                                <motion.a whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 200, damping: 10 }} whileHover={{ scale: 1.1 }} href={item.href}>{item.label}</motion.a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <motion.a whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 200, damping: 10 }} whileHover={{ scale: 1.1 }} href="#" className="py-2 px-3 border rounded-md">{strings.signIn}</motion.a>
                        <motion.a whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 200, damping: 10 }} whileHover={{ scale: 1.1 }} href="#" className="bg-orange-300 py-2 px-3 rounded-md">{strings.AcCreate}</motion.a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-100 w-full p-12 flex flex-col justify-center lg:hidden">
                        <ul>
                            {navItems.map((item: NavItem, index: number) => (
                                <li className="py-4" key={index}><a href={item.href}>{item.label}</a></li>

                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            <a href="#" className="p-2 rounded-md border">{strings.signIn}</a>
                            <a href="#" className="p-2 rounded-md bg-orange-300">{strings.AcCreate}</a>
                        </div>
                    </div>
                )}
            </motion.div>

        </nav>

    )

}


export default Navbar;