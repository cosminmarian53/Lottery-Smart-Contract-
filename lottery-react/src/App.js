import web3 from "./web3";
import { useEffect, useState } from "react";
import lottery from "./lottery";
function App() {
  // State variables
  const [manager, setManager] = useState("");
  const [players, setPlayers] = useState([]);
  const [balance, setBalance] = useState("");
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  // Fetch data from blockchain
  useEffect(() => {
    const fetchData = async () => {
      const manager = await lottery.methods.manager().call();
      const players = await lottery.methods.getPlayers().call();
      const balance = await web3.eth.getBalance(lottery.options.address);
      setManager(manager);
      setPlayers(players);
      setBalance(balance);
    };
    fetchData();
  }, []);
  // Function to enter the lottery
  const onSubmit = async (event) => {
    event.preventDefault();
    setMessage("Waiting on transaction success...");
    const accounts = await web3.eth.getAccounts();
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(value, "ether"),
    });
    setMessage("You have been entered!");
  };
  // Render the UI
  return (
    <div className="App">
      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center app-header">
        <div className="row display-flex justify-content-center align-items-center">
          <div className="col-12 text-center text-bg-danger app-header-content">
            <h1>Welcome to the Lottery</h1>
            <h2>Lottery Contract</h2>
            <p>This contract is managed by {manager}</p>
          </div>
        </div>
      </div>
      {/* -------FORM TO ENTER THE LOTTERY------- */}
      <hr />
      <div className="container-fluid">
        <p>
          There are currently {players.length} people entered, competing to win{" "}
          {web3.utils.fromWei(balance, "ether")} ether!
        </p>
        <div className="container-fluid">
          <form onSubmit={onSubmit} className="container-fluid">
            <h4>Want to try your luck?</h4>
            <label>Amount of ether to enter</label>
            <br />
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <button>Enter</button>
          </form>
          <h1>{message}</h1>
          {/* -------LIST OF PLAYERS------- */}
          <h4>Current players:</h4>
          <ul>
            {players.map((player) => (
              <li key={player}>{player}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* -------PICK WINNER ---------- */}
      <hr />
      <div
        className="container-fluid"
        style={{ padding: "15px 15px", textAlign: "center" }}
      >
        <h4>Ready to pick a winner?</h4>
        <button
          onClick={async () => {
            setMessage("Waiting on transaction success...");
            const accounts = await web3.eth.getAccounts();
            await lottery.methods.pickWinner().send({
              from: accounts[0],
            });
            setMessage("A winner has been picked!");
          }}
        >
          Pick a winner!
        </button>
      </div>
    </div>
  );
}

export default App;
