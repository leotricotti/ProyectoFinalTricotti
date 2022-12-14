import { useNavigate } from "react-router-dom";
import styles from "../../CSS/item.module.css";

export const Item = ({ product }) => {
  const { id, img, title } = product;
  const navigate = useNavigate();
  const handleDetail = () => {
    navigate(`/products/detail${id}`, { state: product });
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardImg}>
          <img src={img} alt={title} />
          <div onClick={handleDetail} className={styles.cardBtn}>
            <span>Ver más</span>
          </div>
        </div>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </>
  );
};
