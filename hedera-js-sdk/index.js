require('dotenv').config();

const { Client, AccountBalanceQuery } = require("@hashgraph/sdk");

async function main() {
  
    try {

    // Grab your Hedera account ID and Key
    const myAccountId = process.env.ACCOUNTID;
    const myPrivateKey = process.env.PRIVATEKEY;



    // throw an error if you couldn't get the id
    if (myAccountId == null || myPrivateKey == null) {
      throw new Error("Environment variables must be present");
    }



    // connect to the hedera network
    const client = Client.forTestnet();

    client.setOperator(myAccountId, myPrivateKey);

    // Now the connection to the hedera network is established

    // get your balance
    const balance = await new AccountBalanceQuery()
      .setAccountId(myAccountId)
      .execute(client);
    
  } catch (e) {
    console.log(e);
  }
}

main();