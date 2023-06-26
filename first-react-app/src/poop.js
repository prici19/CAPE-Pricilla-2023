import "./Vomit.css"
function Poop ({ user }) {
    return (
      <div className="user-profile">
        <div className="user-emoji"> 
        <img alt="" src={user.emoji}/> 
        </div>
        <h3>{user.name}</h3>
        <p>
        <span role="img" aria-label="email">
          📧
          </span>{" "}
          {user.email}
        </p>
        <p>Age: {user.age}</p>
      </div>
    );
  }
  export default Poop;