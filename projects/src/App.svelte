<script>
  import Color from "./Color.svelte";
  let red = 0
  let green = 30
  let blue = 0;
  function rgbToHex(r, g, b) {
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}
$: hexColor = rgbToHex(red,green,blue)
</script>
<div class="row">
  <div class="col">
    <h1>Color Picker</h1>
  </div>
</div>
<div class="row">
  <div class="column">
    <form>
      <Color color="Red" bind:colorValue={red}/>
      <Color color="Green" bind:colorValue={green}/>
      <Color color="Blue" bind:colorValue={blue}/>
    </form>
  </div>
</div>
<div class="row">
  <div class="column">
    <div id="hex" style="background-color: rgb({red},{green},{blue})"></div>
  </div>
</div>
<div class="row">
  <div class="column">
      <h2>RGB({red}, {green}, {blue})</h2>
      <h2>Hex Color: {hexColor}</h2>
  </div>
</div>
<style>
#hex{
  height: 300px;
  border: dashed 3px;
}
h2{
  margin-top: 20px;
  text-align: center;
}
</style>