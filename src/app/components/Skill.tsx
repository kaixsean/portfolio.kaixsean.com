import Image from 'next/image'
import { nanoid } from 'nanoid'

function Skill(props) {
  return (
    <li className="py-10 px-16 bg-custom-blue-800 dark:bg-custom-blue-500 rounded-lg hover:bg-custom-blue-200 dark:hover:bg-custom-blue-200 hover:text-custom-blue-800">
      <div className="place-self-center">
        <div className="flex flex-col space-y-4 justify-center text-center">
          <Image
            id={`${nanoid()}`}
            className="m-auto"
            src={`/skills/${props.src}`}
            alt={props.name}
            width={48}
            height={48}
          />
          <span>{props.name}</span>
        </div>
      </div>
    </li>
  )
}

export default Skill
