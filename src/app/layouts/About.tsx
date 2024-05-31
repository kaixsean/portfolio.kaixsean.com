function About() {
  return (
    <div className="my-5 container mx-auto max-w-5xl py-10 px-3">
      <h6 id="about" className="text-3xl md:text-4xl py-2 font-medium">
        About
      </h6>
      <div className="flex flex-row">
        <div className="basis-1/4 mt-5 border-t-2 border-customBrown-300 dark:border-y-customYellow-500"></div>
        <div className="p-2 text-md md:text-xl">
          <p className="leading-relaxed">
            I am a full-stack engineer specializing in PHP and JavaScript, with
            experience in Python and Flutter development. I am passionate about
            making digital services easier and more enjoyable for people to use.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
