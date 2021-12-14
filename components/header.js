import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'

function Header() {
    return (
        <div className="justify-between lg:mb-2 md:mb-0 sm:mb-0">
            
            <div className="border-b md:pt-0 mt-1 lg:pt-2 sm:pt-0">
                <div className="flex justify-between lg:mb-2 md:mb-0 sm:mb-0">
                    <div className="lg:text-3xl sm:text-xl md:text-2xl text-2xl ">Senthil Kumar Vedachalam</div>
                </div>
                <div className="text-sm lg:grid sm:grid md:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-20">
                    <a className="flex col-span-1" id="name" href="https://www.linkedin.com/in/senthil-kumar-55693215/"><div className=""><FontAwesomeIcon icon={faLinkedin}/></div>&nbsp;@senthil-kumar-55693215</a> 
                    <a className="flex col-span-1" id="github" href="https://github.com/senth542002"><div className=""><FontAwesomeIcon icon={faGithub} /></div>&nbsp;@senth542002</a> 
                    <a className="flex col-span-1" id="email" href="mailto:senth542002@gmail.com"><div className=""><FontAwesomeIcon icon={faEnvelopeOpen} /></div>&nbsp;@senth542002@gmail.com</a> 
                </div>
            </div>
        </div>
    )
}

export default Header