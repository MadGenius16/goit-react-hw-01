import clsx from "clsx";
import css from "./FriendListItem.module.css"

const FriendListItem = ({ friend: {isOnline, avatar, name} }) =>{
  return (
    <div className={clsx(css.item)}>
      <img className={clsx(css.image)} src={avatar} alt="Avatar" width="48" />
      <p className={clsx(css.name)}>{name}</p>
      <p className={clsx(css.text, isOnline ===true ? css.online : css.offline)}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>

  )
}

export default FriendListItem
  