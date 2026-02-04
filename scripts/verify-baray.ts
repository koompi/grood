import { getBarayClient } from "../lib/baray";

// Mock environment for the script content
// Note: lib/baray.ts reads process.env or defaults. 
// We rely on the defaults in getBarayClient if env vars are missing.
// The defaults we put in getBarayClient are valid placeholders.

async function testBarayClient() {
  console.log("Testing Baray Client...");

  const client = getBarayClient();
  // We can modify the client properties if they were public, but they are protected.
  // However, getBarayClient uses "pk_dev_placeholder" which might throw "Invalid API key" if validation is strict.
  // The validation in PrivateClient constructor:
  // must(api_key.startsWith("pk_prod_") || ... || api_key.startsWith("pk_dev_"), ...)
  // "pk_dev_placeholder" starts with "pk_dev_", so it should pass.

  const originalOrderId = "ORDER-12345";
  const payload = {
    amount: "10.00",
    currency: "USD",
    order_id: originalOrderId,
  };

  try {
    const raw = JSON.stringify(payload);
    const encrypted = client.encrypt(raw);
    console.log("Encrypted Payload:", encrypted);
    console.log("✅ Encryption successful");

    const decryptedRaw = client.decryptIntent(encrypted);
    console.log("Decrypted Raw:", decryptedRaw);

    const decryptedJson = JSON.parse(decryptedRaw!); // decryptIntent returns string or null
    
    if (decryptedJson.order_id === originalOrderId) {
        console.log("✅ Decryption successful (Round Trip)");
    } else {
        console.error(`❌ Decryption mismatch: Expected ${originalOrderId}, got ${decryptedJson.order_id}`);
    }

  } catch (error) {
    console.error("❌ Test failed:", error);
  }
}

testBarayClient();
