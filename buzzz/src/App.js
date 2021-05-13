import './App.css';

function signIn(){
fetch('http://localhost:4444/api/auth',{method:'get',mode:'cors'}).then(val=>{
  console.log(val)
})
}
function App() {
  return (
    <div>
      <button onClick={signIn}>Google Sign-In</button>
    </div>
  );
}

export default App;
