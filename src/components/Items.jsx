import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import data from "../data/itemData";
function Items() {
  return (
    <div className={styles.wrapper}>
      {data.map((itemData) => (
        <ItemCard
          name={itemData.name}
          id={itemData.id}
          price={itemData.price}
          key={itemData.id}
        />
      ))}
    </div>
  );
}

export default Items;
