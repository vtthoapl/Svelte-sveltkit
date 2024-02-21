
<script>
    export let color;
    export let colorValue;
</script>
<label for={color}>{color}({colorValue})</label>
<input type="range" id={color} bind:value={colorValue} min="0" max="255"/>

<style>
    input{
        width: 100%;
    }
</style>

