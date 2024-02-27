<script>
export let team;
export let score;
export let gameOver;

function add() {
    score += 1
}
function minus() {
    score -= 1
}
</script>

<div style="border: dashed {team.toLocaleLowerCase()} 5px" class="col">
    <h1 class:text-danger={team === 'Red'} class:text-primary={team === 'Blue'}>Team {team}: {score}</h1>
    <button disabled={gameOver} on:click={add} class="btn btn-success">+</button>
    <button disable={gameOver} on:click={minus} class="btn btn-danger">-</button>
</div>

<style>
    div.col {
        padding: 20px;
        text-align: center;
    }
</style>