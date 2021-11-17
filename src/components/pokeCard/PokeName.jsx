const PokeName = ({ name }) => {
  const styles = {
    container: 'w-full bg-red-500 rounded-full border-2 border-grey-500 absolute bottom-0 right-0',
    text: 'z-30 uppercase'
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>{name}</h1>
    </div>
  
  )
};

export default PokeName;
