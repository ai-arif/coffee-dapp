import { ethers } from "ethers";
import "./Buy.css";

const Buy = ({ state }) => {
  const buy = async (event) => {
    event.preventDefault();
    const { contract } = state;
    console.log(contract);

    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;

    const amount = { value: ethers.utils.parseEther("0.0000001") };
    const transaction = await contract.buyCoffee(name, message, amount);
    await transaction.wait();
    alert("Transaction successful");
    window.location.reload();
  };
  return (
    <div className="center">
      <form onSubmit={buy}>
        <div>
          <input type="text" required id="name" />
          <span>Name</span>
        </div>
        <div>
          <input type="text" required id="message" />
          <span>Message</span>
        </div>
        <div>
          <input type="submit" value="Order" id="button"/>
        </div>
      </form>
    </div>
  );
};

export default Buy;
