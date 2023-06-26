import Poop from "./poop";
function Pee ({users}) {
return (
    <div className="card"> {users.map((user) => (
        <Poop key={user.id} user={user} />
      ))}</div>
);
}
export default Pee;