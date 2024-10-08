import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript,SiExpress } from "react-icons/si";


// motion
const Technologies = () => {
    return (
        <div className="pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap items-center  justify-center  gap-4 ">
                <div className="p-4">
                    <SiJavascript className="text-7xl text-yellow-300"/>
                </div>
                <div className="p-4">
                    <RiReactjsLine className="text-7xl text-cyan-500" />
                </div>
                <div className="p-4">
                    <SiMongodb className="text-7xl text-green-500" />
                </div>
                <div className="p-4">
                    <SiTailwindcss className="text-7xl text-cyan-500" />
                </div>
                <div className="p-4">
                    <FaNodeJs className="text-7xl text-green-700" />
                </div>
                <div className="p-4">
                    <SiExpress className="text-7xl text-700" />
                </div>


            </div>
        </div>
    );
};

export default Technologies;