import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

// motion
const iconVariant = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
});

const Technologies = () => {
    return (
        <div className="pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">
                Technologies
            </motion.h1>

            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariant(2.5)}
                    className="p-4">
                    <div className="p-3 rounded-lg border-4 border-gray-500">
                        <SiJavascript className="text-5xl text-yellow-300" />
                    </div>
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariant(3)}
                    className="p-4">
                    <div className="p-3 rounded-lg border-4 border-gray-500">
                        <RiReactjsLine className="text-5xl text-cyan-500" />
                    </div>
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariant(5)}
                    className="p-4">
                    <div className="p-3 rounded-lg border-4 border-gray-500">
                        <SiMongodb className="text-5xl text-green-500" />
                    </div>
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariant(2)}
                    className="p-4">
                    <div className="p-3 rounded-lg border-4 border-gray-500">
                        <SiTailwindcss className="text-5xl text-cyan-500" />
                    </div>
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariant(6)}
                    className="p-4">
                    <div className="p-3 rounded-lg border-4 border-gray-500">
                        <FaNodeJs className="text-5xl text-green-700" />
                    </div>
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariant(4)}
                    className="p-4">
                    <div className="p-3 rounded-lg border-4 border-gray-500">
                        <SiExpress className="text-5xl text-gray-700" />
                    </div>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default Technologies;
