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
            I&apos;m a full-stack web developer with 10 years of experience, 2
            years of which have been focused on API development. I also have 6
            months of experience in cross-platform mobile app development using
            Flutter.
          </p>
          <p className="leading-relaxed">
            In my previous roles, I was responsible for the development and
            maintenance of multiple projects, include forum and marketplace. I
            also have experience in design mobile web and developing
            subscription services.
          </p>
          <p className="leading-relaxed">
            I have demonstrated the ability to work independently and solve
            problems, as well as collaborate with internal and external teams.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
