import { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import styles from "./itemList.module.css";

const ItemList = ({ list }) => {

    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        setItemList(list);
    }, [list]);

    return (
        <div>
            <Grid columns={3}>
                <Grid.Row>
                    {itemList.map( item => {
                        return (
                            <Grid.Column>
                                <div className={styles.wrap}>
                                    <img 
                                        src={item.image_link} 
                                        alt={item.name} 
                                        className={styles.img_item}
                                    />

                                    <strong className={styles.tit_item}>{item.name}</strong>
                                    <span className={styles.txt_info}>
                                        {item.category} {item.product_type}
                                    </span>
                                    <strong className={styles.num_price}>${item.price}</strong>
                                </div>
                            </Grid.Column>
                        )
                    })}
                </Grid.Row>
            </Grid>
        </div>
    );
  }
  
  export default ItemList;