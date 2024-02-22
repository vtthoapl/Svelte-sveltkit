<script>
let name = "Jose";
$: capitalName = name.toUpperCase();
let age= 10;
$:dogAge = age * 7;
let red = 10;
let green = 0;
let blue = 0;
let highGreen = false;
$: colorValue = color(red,green,blue)
$: console.log(green)
function color(red,green,blue){
  return `rgb(${red},${green},${blue})`
};
setTimeout(() => {
  green += 150
}, 1500);

$: if(green > 100){
  highGreen = true;
}
</script>
<h2>{name}</h2>
<h2>{capitalName}</h2>
<h2>{age}</h2>
<h2>dog age: {dogAge}</h2>
<input type="text" bind:value={name}>
<input type="number" bind:value={age}>

<h2>color value : {colorValue}</h2>
<h1>{highGreen? "High": "Low"}</h1>