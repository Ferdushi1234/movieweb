import heroStyles from "../styles/herosection.module.css"
import styles from "../styles/common.module.css"
import Image from "next/image";
import Link from "next/link";
import GS from "../GS/page"


const Herosection = ({title, imageUrl}) => {
    return (
        <>
        <video height={"840rem"} src={"/anim.mp4"} autoPlay="{true}" loop muted
          className="absolute z-10 w-auto h-auto
            min-w-full min-h-full max-w-none">
        </video>
        <main className={heroStyles.main_section} >
            
            
            <div className={heroStyles['custom-shape-divider-bottom-1681647578']}>
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={heroStyles.hero_content}>
                        <h2>{title}</h2><hr/><hr/><hr/>
                        <h3> EXPLORE & REVIEW</h3>
                        <p> From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse
                            our
                            selection of the latest and greatest movies, and find your new favorite today.
                        </p>
                        <Link href="/movie">
                            <button >
                                Explore Movies
                            </button>
                        </Link>
                    </div>

                    <div className={heroStyles.hero_image}>
                        <Image src={imageUrl}  type="Image/svg" width={500} height={500}></Image>
                    
                    </div>
                </div>
                
            </div>
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className={heroStyles["shape-fill"]}></path>
                </svg>
                
            </div>
            
        </main>
        <GS />
        </>
        
    );
};

export default Herosection;