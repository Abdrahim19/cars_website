import styles from "../../../styles/styles"
import BlogPost from "./Blogpost"
import SectionTitle from "../Sectiontitel"

const Blogsection = () => {
  return (
    <>
    <SectionTitle title={"Bien choisir son électrique ou hybride d'occasion"} to="blogs" />
    <div className={`${styles.flexCenter}`}>
    <div className="lg:flex items-stretch md:mb-8 mb-4">
      <div className="lg:w-1/2">
        
        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
          <div className="sm:w-1/2 relative">
          <BlogPost
                          date="12 April 2021"
                          title="The Decorated Ways"
                          description="Dive into minimalism"
                          imageUrl="https://i.ibb.co/6Wfjf2w/img-4.png" Linkdir={''}          />
          </div>
          <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
          <BlogPost
                          date="12 April 2021"
                          title="The Decorated Ways"
                          description="Dive into minimalism"
                          imageUrl="https://i.ibb.co/6Wfjf2w/img-4.png" Linkdir={''}          />
          </div>
        </div>
        <div className="relative h-full">
            <div className="mt-4">
        <BlogPost
                          date="12 April 2021"
                          title="The Decorated Ways"
                          description="Dive into minimalism"
                          imageUrl="https://i.ibb.co/6Wfjf2w/img-4.png" Linkdir={''}          />
            </div>
        </div>
      </div>
      <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
        <div className="relative">
        <BlogPost
                          date="12 April 2021"
                          title="The Decorated Ways"
                          description="Dive into minimalism"
                          imageUrl="https://i.ibb.co/6Wfjf2w/img-4.png" Linkdir={''}          />
        </div>
        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
          <div className="relative w-full">
          <BlogPost
                          date="12 April 2021"
                          title="The Decorated Ways"
                          description="Dive into minimalism"
                          imageUrl="https://i.ibb.co/6Wfjf2w/img-4.png" Linkdir={''}          />
          </div>
          <div className="relative w-full sm:mt-0 mt-4">
          <BlogPost
                          date="12 April 2021"
                          title="The Decorated Ways"
                          description="Dive into minimalism"
                          imageUrl="https://i.ibb.co/6Wfjf2w/img-4.png" Linkdir={''}          />
          </div>
        </div>
      </div>
    </div>
</div>
    </>

  )
}

export default Blogsection