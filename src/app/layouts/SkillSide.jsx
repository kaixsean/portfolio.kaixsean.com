import Image from 'next/image'
import Skill from '../components/Skill'

function SkillSide(props) {
  const skillList = props.skills?.map((skill) => (
    <Skill name={skill.name} src={skill.src} key={skill.id} />
  ))
  return (
    <div>
      <ul className="py-5 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 place-items-stretch">
        {skillList}
      </ul>
    </div>
  )
}

export default SkillSide
