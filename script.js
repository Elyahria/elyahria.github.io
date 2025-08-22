
async function sendMessage() {
  const userInput = document.getElementById('userInput').value;
  const responseDiv = document.getElementById('response');
  responseDiv.innerHTML = "Piszę odpowiedź...";

  const result = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_KEY_HERE"
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [{ role: "user", content: userInput }]
    })
  });
  const data = await result.json();
  const reply = data.choices[0].message.content;
  responseDiv.innerHTML = reply;
}
