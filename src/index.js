import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import image1 from "./images/47386501_974804009384783_6028323879422787584_n.jpg"
import image2 from "./images/81649500_1243309449200903_816664469143814144_n.jpg"
import image3 from "./images/47386501_974804009384783_6028323879422787584_n.jpg"

const Person = ({img, name, job, children}) => {
  //using template literals
  //const url =`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  
  return(
    <article className="person">
      {/* <img src={url}></img> */}
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

//creating a new component
const PersonList = () => {
  return(
    <section className="person-list">
      <Person  name="Emefa" job="Developer"><img src={image1} alt=""></img></Person>
      <Person  name="Emefa" job="Developer"><img src={image2} alt=""></img></Person>
      <Person  name="Emefa" job="Designer"><img src={image3} alt=""></img>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Eius corrupti ipsum debitis animi. Quibusdam pariatur blanditiis repellendus mollitia deleniti quisquam iure molestias nulla!
      </p></Person>
    </section>

  )
}

















ReactDOM.render(<PersonList></PersonList>,document.getElementById('root'))