import Nav from "./nav"
import TechStack from "./techStack"
import techStackItems from "./techStackArray"

export default function Home () {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <Nav />
      <div className="flex flex-col justify-center items-center">
        <div className="w-[750px]">
          <div className="">
              <p className="text-6xl font-thin text-center">Mark Wabwire</p>
          </div>
          <div className="flex flex-col justify-center items-center border-2 p-2 rounded-xl mt-[60px] mb-[65px]">
            <div className="pb-2">
              <h1 className="font-thin text-[2rem] mt-6 bg-gradient-to-r from-red-600 via-blue-500 to-blue-200 text-transparent bg-clip-text">Full-stack Developer</h1>
            </div>
            <div className="p-4">
              <article className="text-lg">
                Hello, I'm Mark Wabwire, curently a secondary school graduate. I'm a passionate web developer with 3-5 years of experience though hardly in the field/company. I however possess the necessary knowledge and skills to kick-start a career in web-development. My strengths lie in my my robust and resilient problem-solving and versatilty. With this background, I'm very much ready to tackle any challenges and thus create innovative solutions to drive business growth and enhance user experiences.
              </article>
            </div>
          </div>

          {/* About me */}
          <div className="mb-8">
            <div className="mb-4">
              <h1 className="font-thin text-[2rem] text-gray-400">About me</h1>
            </div>

            {/* Image section */}
            <div>
              <div>
                <img src="my-image" alt="my image" />
              </div>
            </div>
            <div className="text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis repellendus ullam perferendis earum, magnam iste sunt esse laborum aliquam hic dicta quia consequuntur similique voluptas temporibus neque est. Molestiae ducimus odit, perspiciatis quam ratione libero saepe provident aspernatur incidunt pariatur voluptatem optio aliquam officiis, blanditiis sed suscipit deleniti velit? Optio.
            </div> 
          </div>

          <div >
            <div className="mb-6">
              <h1 className="font-thin text-[2rem] mt-2 text-gray-400">Tech stack</h1>
            </div>
            <div>
              <div className="h-[200px] w-[400px] flex flex-col flex-wrap gap-y-6"> 
                {techStackItems && techStackItems.map((item) => (
                  <TechStack key= {item.id} imageSource={item.image}/>
                ))}
              </div>
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