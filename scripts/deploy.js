async function main(){
    const Voting = await ethers.getContractFactory("Voting");

    //Start deployment, return a promise that resolves to a contract object
    const _Voting = await Voting.deploy(["Mark", "Mike", "Henry", "Rock"], 90);

    console.log("Contract address: ", _Voting.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

