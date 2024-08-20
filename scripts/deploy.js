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

//0xEDEcf14f6a18a9f704783C5a25EE639C258af899
