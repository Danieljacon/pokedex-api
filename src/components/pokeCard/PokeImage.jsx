const PokeImage = ({ image, name }) => {
  const styles = {
    image: '',
  }
  return <img src={image} alt={name} className={styles.image}/>;
};

export default PokeImage;
