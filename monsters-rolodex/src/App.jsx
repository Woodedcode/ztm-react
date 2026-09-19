import './App.css'

const Card = (props) => {
  return <div>{props.name}</div>
};

const App = () => {
  const arr = ['a', 'b', 'c','d','e','f'];

  return (
    <>
    {
      arr.map((name, index) => {
        console.log(`${name}-${index}`)
        return (
          <Card key={`${name}-${index}`} name={name} />
        )})}
    </>
  );
}

export default App
