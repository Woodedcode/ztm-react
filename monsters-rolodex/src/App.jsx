import {useState,useEffect} from 'react'
import './App.css'

const Card = ({name,email}) => {
  return <div>
    <h3>{name}</h3>
    <p>{email}</p>
  </div>
};

const App = () => {
  const [monsters, setMonsters] = useState([]);
  console.log(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => setMonsters(data))
  }, [])

  return (
    <>
    {
      monsters.map(({name,email}, index) => {
        return (
          <Card key={`${name}-${index}`}
           name={name}
           email={email}
            />
        )})}
    </>
  );
}

export default App