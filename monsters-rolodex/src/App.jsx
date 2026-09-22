import {useState,useEffect} from 'react'
import './App.css'

const Card = (props) => {
  return <div>{props.name}</div>
};

const App = () => {
  const [arr, setArr] = useState(['a', 'b', 'c','d','e','f']);

  useEffect(() => {
    console.log('running side effect');
  }, [])

  return (
    <>
    {
      arr.map((name, index) => {
        return (
          <Card key={`${name}-${index}`} name={name} />
        )})}
        <button 
        onClick={() => {
            setArr((arr) => [...arr, 'x']);
            }
          }
        >
          Add letter
        </button>
    </>
  );
}

export default App