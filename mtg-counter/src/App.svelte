<script>
  import Team from "./Team.svelte";
let blueScore = 5;
let redScore = 5;
let winningText = "";
$: blueWon = redScore === 0 || blueScore === 10;
$: redWon = blueScore === 0 || redScore === 10;
$: gameOver = redWon || blueWon;

function newGame(){
    redScore = 5;
    blueScore = 5;
}
</script>
<div class="row mt-2 mb-2">
    <div class="col">
        <h1 class="text-center">MTG counter app</h1>
    </div>
</div>

<div class="row">
    <Team {gameOver} team="Red" bind:score={redScore}/>
    <Team {gameOver} team ="Blue" bind:score={blueScore}/>

</div>
{#if !gameOver}
<div class="row mt-3">
    <div class="col">
        <button on:click={newGame} class="btn btn-warning w-100">Reset Game</button>
    </div>
</div>
{:else}
<div class="row mt-3">
    <div class="col">
        {#if blueWon}
        <h2 class="text-center  text-primary"> Blue won</h2>
        {:else}
        <h2 class="text-center  text-primary"> Red won</h2>
        {/if}
    </div>

</div>
<div class="row mt-3">
    <div class="col">
        <button on:click={newGame} class="btn btn-success w-100">New Game</button>
    </div>
</div>

{/if}


<style>

</style>

<!-- <script>
let redScore = 10;
let blueScore = 10;
 function plusR(){
    if (redScore <20){
        redScore += 1
    }
 }
 function minusR(){
    if (redScore > 0){
        redScore -= 1
    }
    return{
    redScore = 10;
    blueScore = 10
 } on:con:click={}resreset
 }
 function plusB(){
    if (blueScore <20){
        blueScore += 1
    }
    return
 }
 function minusB(){
    if (blueScore > 0) {
        blueScore -= 1
    }
    return
 }
 function reset(){
    redScore = 10;
    blueScore = 10
 }
</script>
<div class="text-center mt-2">
    <h1>MTG Counter App</h1>
</div>
<div class="body">
    <div class="container text-center">
        <div class="row align-items-start">
          <div class="col team red">
            <div>
                <h6>Team Red: {redScore}</h6>
            </div>
            <div>
                <button type="button" class="btn btn-success btn-sm" on:click={plusR}>+</button>
                <button type="button" class="btn btn-danger btn-sm" on:click={minusR}>-</button>
            </div>
          </div>
          <div class="col team blue">
            <div>
                <h6>Team Blue: {blueScore}</h6>
            </div>
            <div>
                <button type="button" class="btn btn-success btn-sm" on:click={plusB}>+</button>
                <button type="button" class="btn btn-danger btn-sm" on:click={minusB}>-</button>
            </div>
          </div>       
        </div>
      </div>
    <div class="d-grid gap-2 text-center">
        {#if redScore=== 0 || blueScore === 20} 
        <p>Blue won</p>
        <button class="btn btn-success" on:click={reset}>New game</button>
        {:else if blueScore === 0 || redScore === 20}
        <p>Red won</p>
        <button class="btn btn-success" on:click={reset}>New Game</button>
        {:else}
        <button class="btn btn-warning reset" type="button" on:click={reset}>Reset</button>
        {/if}
      </div>
</div>
  <style>
    h1{
        text-align: center;
    }
    .body{
        margin: 0 15%;
    }
    .team {
        padding: 3%;
        margin: 3% auto;
    }
    .red{
        border: 2px dashed red;
    }
    .blue{
        border: 2px dashed blue;
    }
  </style> -->