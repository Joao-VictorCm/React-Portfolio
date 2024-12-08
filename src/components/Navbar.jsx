import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { SiWakatime } from "react-icons/si";

const Navbar = () => {
    return  <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <h1 className="mx-2 w-10 text-5xl">JV</h1>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/joao-victorcm-dev/" target="_blank"><FaLinkedin/></a>
            <a href="https://github.com/Joao-VictorCm" target="_blank"><FaGithub /></a>
            <a href="https://wakatime.com/@JoaoVictorCm" target="_blank"><SiWakatime /></a>
        </div>
    </nav>
}

export default Navbar