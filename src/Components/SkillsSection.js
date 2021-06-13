import React from 'react'
import {faGithub, faJs, faNode, faReact} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function SkillsSection({skill, progress}) {
    return (
        <div className="SkillsSection">
            <div className="skills-container">
                <br />
                <h3 className="skill-title">{skill}</h3>
                {/* <div className="skill-bar"> */}
                    {/* <p className="skill-text">{progress}</p> */}
                    <div className="skill-progress">

                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default SkillsSection
