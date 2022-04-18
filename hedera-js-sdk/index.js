const { Client, AccountBalanceQuery } = require("@hashgraph/sdk");

require("dotenv").config();

async function main() {


    // Grab your Hedera account ID and Key
    const myAccountId = process.env.MY_ACCOUNT_ID;
    const myPrivateKey = process.env.MY_PRIVATE_KEY;


    // throw an error if you couldn't get the id
    if (myAccountId == null || myPrivateKey == null ) {
        throw new Error("Environment variables must be present");
    }


    // connect to the hedera network
    const client = new Client({
        network: { "0.testnet.hedera.com:50211": "0.0.3" },
        operator: {
            account: myAccountId,
            privateKey: myPrivateKey
        }
    });


    // Now the connection to the hedera network is established


    // get your balance 
    const balance = await new AccountBalanceQuery()
        .setAccountId(myAccountId)
        .execute(client)


    console.log(`${myAccountId} balance =  ${balance.value()}`);
}


main();