require("dotenv").config();
const client = require("twilio")(
  process.env.ACCOUNT_SID,
  process.env.AUTH_TOKEN
);

async function sendMesage() {
  try {
    await client.messages.create({
      from: "+14067961719",
      to: "+919515064200",
      body: "Hello Hemanth!",
    });
    console.log("SMS has been sent!");
  } catch (error) {
    console.error(error);
  }
}

sendMesage();
