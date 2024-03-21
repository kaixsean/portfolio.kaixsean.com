import Image from 'next/image'

function Skill(props) {
  return (
    <li className="py-10 px-16 bg-customBlack-700 rounded-lg hover:bg-customGreen-500 dark:hover:bg-customYellow-600">
      <div className="place-self-center">
        <div className="flex flex-col space-y-4 justify-center text-center">
          <Image
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
