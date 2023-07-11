import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div>
      test
    </motion.div>
  )}


  // Error below:
  // The tag <dev> is unrecognized in this browser. 
  // If you meant to render a React component, start its name with an uppercase letter.
  // \/\/\/\/\/\/\/\/\/\/
const Works = () => {
  return (
    <>
      {/* <motion.div variant={textVariant()}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            The following projects showcase my journey and the projects I have used to sharpen my skills. Each project has a brief description as well as a link to the code and a live demo.
          </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}/>
        ))}
      </div> */}
    </>
  )
}

export default SectionWrapper(Works, "");