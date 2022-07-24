import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className="footer p-10 text-primary-content footer-center">

      <ul className='flex justify-between'>
        <li className="my-4 mx-2">
          <a href="https://www.linkedin.com/in/helen-tan-mz/" target="_blank" rel="noreferrer">
            <FaLinkedinIn size={30} />
          </a>
        </li>
        <li className="my-4 mx-2">
          <a href="https://github.com/helen-tan" target="_blank" rel="noreferrer">
            <FaGithub size={30} />
          </a>
        </li>
        <li className="my-4 mx-2">
          <a href="mailto:helentanmz0909@gmail.com" target="_blank" rel="noreferrer">
            <FiMail size={30} />
          </a>
        </li>
      </ul>

      <div>
        <p>Copyright &copy; Helen Tan {footerYear}</p>
      </div>

    </footer>
  )
}

export default Footer
