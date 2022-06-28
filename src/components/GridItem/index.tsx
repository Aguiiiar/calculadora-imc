import { Level } from "../../helpers/imc";
import styles from "./GridItem.module.css";
import upImage from "../../assets/img/up.png";
import downImage from "../../assets/img/down.png";

type Props = {
  item: Level
}

export default function GridItem({ item }: Props) {
  return (
    <main className={styles.main} style={{ backgroundColor: item.color }}>
      <div className={styles.gridIcon}>
        <img src={item.icon === 'up' ? upImage : downImage} alt="" width="30" />
      </div>
      <div className={styles.gridTitle}>{item.title}</div>

      {item.yourImc &&
        <div className={styles.yourImc}>
          Seu IMC é de: {item.yourImc} kg/m²
        </div>
      }

      <div className={styles.gridInfo}>
        <>
          IMC está entre <b>{item.imc[0]}</b> e <b>{item.imc[1]}</b>
        </>
      </div>
    </main>
  )
}