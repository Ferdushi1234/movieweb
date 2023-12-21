import styles from "../styles/common.module.css"


const getTopics = async () => {
  
  try {
    
    const res = await fetch("http://localhost:3000/api/topics", {
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

 const TopicsList= async()=> {
  const { topics } = await getTopics() || {}
  .catch(err => {
    return { topics: "There was an error!" }
  })


  console.log(topics);

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
};export default TopicsList;