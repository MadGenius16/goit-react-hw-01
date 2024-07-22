import Profile from "../Profile/Profile"
import userData from "/src/userData.json"
import friends from "/src/friends.json"
import FriendList from "../FriendList/FriendList"
import clsx from "clsx"
import css from "./App.module.css"



function App() {
  return (
      <div className={clsx(css.container)}>
        <Profile userData={userData}/>
        <FriendList friends={friends} />
      </div>
  )
}

export default App
