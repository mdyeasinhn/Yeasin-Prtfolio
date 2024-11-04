import profilePicture from '../../assets/img/mypicture.jpg';
import { motion } from "framer-motion"


// motion 
const containerVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5
        }
    }
}

const childVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        }
    }
}

const Hero = () => {
    return (
        <div className="mt-20 pt-10">
            <div className="flex flex-wrap lg:flex-row-reverse">
                {/* Profile image */}
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <motion.img src={profilePicture} alt="Yeasin" className='border border-stone-900 rounded-3xl h-[400px] w-[350px]' 
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }}
                            
                          
                        />
                    </div>
                </div>
                <motion.div
                 className='w-full lg:w-1/2 '
                 initial="hidden"
                 animate="visible"
                variants={containerVariant}

                
                >
                    <div className='flex flex-col items-center lg:items-start mt-10'>

                        <motion.h2 variants={childVariant} className='pb-2 text-4xl tracking-tighter lg:text-6xl '> Yeasin Arafat</motion.h2>

                        <motion.span variants={childVariant} className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent '>MERN Stack Developer</motion.span>

                        <motion.p variants={childVariant} className='my-2 max-w-lg  py-6 text-xl leading-relaxed  tracking-tighter '>
                        I am a passionate MERN stack developer with a strong foundation in MongoDB, Express.js, React, and Node.js. With a focus on building dynamic and responsive web applications, I strive to create user-friendly experiences that are both functional and visually appealing.
                        </motion.p>

                        <motion.a variants={childVariant} href="https://drive.google.com/file/d/1qwZiwv5DV3-xWV7OSuXE1E2AW_sYzm3B" target='_blank' rel='noopener noreferrer' download className='bg-white rounded-2xl p-4 text-sm text-stone-800 mb-10'>Download Resume</motion.a>
                    </div>

                </motion.div>

            </div>
        </div>
    );
};

export default Hero;