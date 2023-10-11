import "../css/Footer.css"
import { Textalt } from "./StyledComps";
import { AnimatePresence, motion } from "framer-motion";
import { def_tra } from "../scripts/otherData";

export default function Footer(){
    return (
        <AnimatePresence>
        <motion.div className="footer" layout
        transition={def_tra}>
            <Textalt>Project by Alif Nafili</Textalt>
        </motion.div>
        </AnimatePresence>
    );
}