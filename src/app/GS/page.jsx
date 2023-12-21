import styles from "../styles/common.module.css"


const getTopics = async () => {
  
  try {
    
    const res = await fetch("https://6583eb2a4f0b7c0008a8e7c3--celebrated-duckanoo-603801.netlify.app/api/topics", {
      cache: "no-store",
      
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics() || {}

  return (
    <>
    <section className={styles.movieSection }>
      <div className={styles.container} style={{ backgroundColor:"white"}}>
    <h1 style={{fontFamily:'serif'}} >Series & Movie</h1>
      <div className={styles.card_section}>
      
      {topics && topics.map((t) => (
        <div className={styles.card_data}
          key={t._id}
        >
          <div className={styles.card} >
            
          <div className={styles.card_image}>
          <img src={t.title}  width={260} height={200} />
          </div>
            <div><h2 style={{fontFamily:'serif', textAlign:'center'}}>{t.description}</h2></div>
          </div>
        </div>
      ))}
      </div>
      </div>
    </section>
    </>
  );
}