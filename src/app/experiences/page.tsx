export default function Page() {
  return (
    <div>
      <div className="bg-customBrown-500 dark:bg-customBlack-800">
        <div className="container mx-auto max-w-5xl py-10 px-5">
          <div className="space-y-2">
            <h2 className="text-xl lg:text-5xl mb-5">Personal Skill</h2>
            <div>
              <div className="flex flex-row space-x-2 mb-2.5">
                <div className="px-2.5 rounded-full bg-sky-950">
                  <span className="text-md lg:text-2xl">1</span>
                </div>
                <h3 className="text-md lg:text-2xl">Web and App Development</h3>
              </div>
              <div className="ml-11">
                <ol className="list-inside list-decimal space-y-3">
                  <li>Web: PHP, Python, Laravel, Django</li>
                  <li>Database: MySQL, MongoDB</li>
                  <li>Mobile: Flutter</li>
                </ol>
              </div>
            </div>
            <div>
              <div className="flex flex-row space-x-2 mb-2.5">
                <div className="px-2.5 rounded-full bg-sky-950">
                  <span className="text-md lg:text-2xl">2</span>
                </div>
                <h3 className="text-md lg:text-2xl">DevOps Concept</h3>
              </div>
              <div className="ml-11">
                <ol className="list-inside list-decimal space-y-3">
                  <li>Cloud platform: GCP</li>
                  <li>Version control: Git, GitHub</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sky-950">
        <div className="container mx-auto max-w-5xl py-10 px-5">
          <div className="space-y-2">
            <h2 className="text-xl lg:text-5xl mb-5">Education</h2>
            <div>
              <div className="flex flex-row space-x-2 mb-2.5">
                <div className="px-2.5 rounded-full bg-customBrown-500">
                  <span className="text-md lg:text-2xl">1</span>
                </div>
                <h3 className="text-md lg:text-2xl">
                  National Dong Hwa University
                </h3>
              </div>
              <div className="ml-11">
                <p>
                  <strong>Master of Science in Computer Science</strong>
                </p>
                <time>2011-2013</time>
              </div>
            </div>
            <div>
              <div className="flex flex-row space-x-2 mb-2.5">
                <div className="px-2.5 rounded-full bg-customBrown-500">
                  <span className="text-md lg:text-2xl">2</span>
                </div>
                <h3 className="text-md lg:text-2xl">Chung Hua University</h3>
              </div>
              <div className="ml-11">
                <p>
                  <strong>Bachelor of Science in Computer Science</strong>
                </p>
                <time>2005-2009</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
