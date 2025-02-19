async function checkBackend() {
    try {
        let response = await fetch("https://full-stack-6-889f.onrender.com/checking");
        let data = await response.text();  // Use .json() if the response is in JSON format
        console.log("Response from backend:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}
async function sendData() {
    const response = await fetch("https://full-stack-6-889f.onrender.com/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userName: "testUser1177",
            password: "testPassword"
        }),
        credentials: "include" // Ensures cookies are included in the request
    });

    const result = await response.text(); // Or response.json() if the response is JSON
    console.log(result);
}

sendData(); // Run the function
checkBackend();