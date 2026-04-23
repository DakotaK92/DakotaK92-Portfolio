import { FaGithub, FaLinkedin, FaBehanceSquare } from "react-icons/fa"

const socials = [
    { icon: <FaGithub />, path:'https://github.com/DakotaK92', label: "GitHub" },
    { icon: <FaLinkedin />, path:'https://www.linkedin.com/in/dakotaking92/', label: "LinkedIn" },
    { icon: <FaBehanceSquare />, path:'https://www.behance.net/dakotaking', label: "Behance" },
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
            <a
              key={index}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className={iconStyles}
            >
                {item.icon}
            </a>
        )
      })}
    </div>
  )
}

export default Social
