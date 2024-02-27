<script>

async function getQuote(){
  const res = await fetch("https://zenquotes.io/api/random")
  const [answer] = await res.json();
  return answer
}

let promise = getQuote()

function refreshQuote(){
  promise = getQuote()
}
</script>

{#await promise} 
<h2>Loading...</h2>
{:then answer}
<h2>{answer.q}</h2>
<h3>Author:{answer.a}</h3>
{:catch error}
<h2>error:{error.message}</h2>
{/await}

<button on:click={refreshQuote} type="button">Refresh</button>