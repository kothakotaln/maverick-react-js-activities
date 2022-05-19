import logo from './logo.svg';
import './App.css';
import profile from './Profile';
import Profile from './Profile';
import { Picture } from './Profile';
import ProfileProps, { PictureProps } from './ProfileProps';
import {UserArray, UserArrayMap} from './component/Iterate'
import { User } from './component/User';
import {ButtonPractice} from './component/ButtonPractice'
import { Form } from './component/Form';

function SimpleArray(){
  let fruits = ["Apple","Mango","Grapes","Orange"];
  return(<div>
    <h2>Fruits list:-</h2>
    <ul>
      {fruits.map((fruit,index)=><li key={index}>{fruit}</li>)}
    </ul>
  </div>)
}
function Button(){
  return (<div>
    <button className='btn btn-primary'>MyButton</button>
    <button className='btn btn-secondary'>MyButton</button>
  </div>)
}
function DateFormatter(props){
  return(<div>
    <p><b>Date: </b>{props.date.toLocaleDateString()}</p>
  </div>)
}

function Author(props){
  return (<div>
    <img src ={props.profile.imageURL} width="50" height="50"/>
    <p><b>Author: </b><i>{props.profile.name}</i></p>
  </div>);
}

function Comment(props){
  return (<div>
    <Author profile = {props.profile} />
    <p><b>Comment: </b>{props.text}</p>
    <p><b>Likes: </b>{props.likes}</p>
    <DateFormatter date = {props.date}/>
  </div>);
}
function App() {
  let comment1={
    text:"Hi What's up?",
    profile : {
      name:"wolf", imageURL:"https://www.bing.com/th?id=OIP.VaaEBbL79GoLp5yJN0aj9wHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
    },
    likes:10,
    date:new Date()
  };
  let comment2={
    text:"Learning React",
    profile : {
      name:"React", imageURL:"https://www.bing.com/th?id=OIP.94jTLkOt9RmrNzhxR-PQ7gHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
    },
    likes:3,
    date:new Date()
  }
  return (
    <div>
      <h1>This is App Component</h1>
      <Profile />
      <Picture />
      <Comment text ={comment1.text} profile={comment1.profile} likes={comment1.likes} date={comment1.date}/>
      <Comment text ={comment2.text} profile={comment2.profile} likes={comment2.likes} date={comment2.date}/>
      <ProfileProps username="Rashu" age="28"/>
      <PictureProps url="https://www.bing.com/th?id=OIP.PJmiy3UnIfHhDjHx1_mqjwHaFS&w=295&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"></PictureProps>
      <h1>This is Root Component</h1>
      <Button />
      <SimpleArray />
      <UserArray />
      <div className = "row">
        <div className = "col-4">
          <SimpleArray />
        </div>
        <div className = "col-4">
          <UserArray />
        </div>
        <div className='container-fluid'>
        <div className = "col-4">
          <SimpleArray />
        </div>
        <div className = "col-8">
          <UserArrayMap />
        </div>
        <User username ="Alex"/>
        <ButtonPractice />
        <Form />
        </div>
      </div>
     </div>
  );
}

export default App;
