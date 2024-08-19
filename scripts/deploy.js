const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const Coffee = await hre.ethers.getContractFactory("Coffee");

  // Deploy the contract
  console.log("Deploying Coffee contract...");
  const coffee = await Coffee.deploy();

  // Wait for the contract to be mined
  await coffee.waitForDeployment();

  console.log("Coffee contract deployed to:", await coffee.getAddress());
}

// Run the deployment
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//0x5FbDB2315678afecb367f032d93F642f64180aa3
