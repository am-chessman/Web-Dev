import Nav from "./nav"
import TechStack from "./techStack"
import techStackItems from "./techStackArray"

export default function Home () {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <Nav />

      {/* Main content */}
      <div className="font-jetbrains-mono flex flex-col justify-center items-center">
        <div className="w-full max-w-[750px]">
          <div className="flex flex-col justify-center items-center border-2 sm:pr-2 sm:pl-2 rounded-xl mt-[62px] sm:mb-12 sm:m-auto sm:mt-8 mb-[65px]">
            <div className="pb-2">
              <h1 className="font-bold text-4xl sm:text-2xl sm:text-center mt-4 text-primary">Full-stack Developer</h1>
            </div>
            <div className="p-4">
              <article className="text-lg font-medium sm:w-full sm:m-auto">
                I'm a secondary school graduate and passionate web developer with 3-5 years of experience, although not in a formal field or company setting. I possess strong problem-solving skills and versatility, making me well-equipped to tackle challenges and create innovative solutions that drive business growth and enhance user experiences.
              </article>
            </div>
          </div>

          {/* About me */}
          <div className="mb-8">
            <h1 className="font-medium text-3xl text-primary sm:text-center mb-4">About me</h1>
            <p className="text-lg font-medium pl-4 pr-4 sm:m-auto">
              I am a passionate web developer specializing in responsive interfaces and robust server-side applications. Proficient in modern web technologies like Next.js, Tailwind CSS, and PostgreSQL, I focus on optimizing, implementing authentication systems, and scaling web applications.
            </p>
          </div>

          <div>
            <h1 className="font-medium text-3xl mt-2 sm:text-center text-primary mb-6">Tech stack</h1>
            <div className="h-[200px] w-[400px] flex flex-col flex-wrap gap-y-6 sm:w-full sm:m-auto sm:flex-row sm:justify-center sm:gap-x-6"> 
              {techStackItems && techStackItems.map((item) => (
                <TechStack key={item.id} imageSource={item.image} />
              ))}
            </div>
          </div>

          {/* Footer section */}
          <div className="flex justify-center mt-8 mb-8 text-base text-center">
              <span>&#169; Mark Wabwire {currentYear}</span>
          </div>
        </div>
      </div>
    </>
  )
} 