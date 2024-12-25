
import './App.css'
import UserCard from './UserCard'
import pic from './assets/pic.jpg'
import pic2 from './assets/pic1.jpg'
import pic1 from './assets/pic2.jpg'
import pic3 from './assets/pic3.jpg'

function App() {

 

  return (
    <> 
          <div className="container">
            <UserCard name=" Hacker" pic = {pic} />
            <UserCard name=" Muhammad Shayan" pic = {pic2} />
            <UserCard name="Mehran Khan " pic = {pic1}/>
            <UserCard name="Hidden Talent" pic = {pic3} />
          </div>
    </>
  )
}

export default App
