require('dotenv').config();

const { Client, TransferTransaction, Hbar   } = require("@hashgraph/sdk");

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




    // this the link for the docs 
    // https://docs.hedera.com/guides/getting-started/transfer-hbar

//console.log("The new account balance is: " +accountBalance.hbars.toTinybars() +" tinybar.");
//-----------------------<enter code below>--------------------------------------

//Create the transfer transaction
const sendHbar = await new TransferTransaction()
     .addHbarTransfer(myAccountId, Hbar.fromTinybars(-1000)) //Sending account
     .addHbarTransfer("0.0.17210", Hbar.fromTinybars(1000)) //Receiving account
    //  .execute(client);

//v2.0.0

    console.log(await sendHbar.execute(client));

    
  } catch (e) {
    console.log(e);
  }
}

main();