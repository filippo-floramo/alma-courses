import { children, ParentProps } from "solid-js"
import styles from "./list-item.module.scss"


interface IListItem {
   onItemClick?: () => void;
   onDeleteClick?: () => void;
   onEditClick?: () => void;
}

type ListItemProps = IListItem & ParentProps;


export default function ListItem(props: ListItemProps) {

   const c = children(() => props.children)

   return (
      <div class={styles.list_item_container}>
         <div
            class={styles.list_item}
            onClick={() => props.onItemClick()}
         >
            {c()}
         </div>
         <div
            class={styles.edit_icon}
            onClick={() => props.onEditClick()}
         >
            EDIT
         </div>
         <div
            class={styles.delete_icon}
            onClick={() => props.onDeleteClick()}
         >
            DEL
         </div>
      </div>
   )
}