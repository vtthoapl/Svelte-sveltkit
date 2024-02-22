<script>
    let top = 100
    let left = 100
    function click(e){
      console.log(e);
      alert("clicked")
    }
    function onInput(e){
      console.log(e.target.value, "input")
    }
    function onChange(e){
      console.log(e, "change")
    }
    function onKeyUp(e){
      switch(e.key){
        case "ArrowUp":
          top -=10;
          break;
        case "ArrowDown":
          top +=10;
          break;
        case "ArrowLeft":
          left -=10;
          break;
        case "ArrowRight":
          left +=10;
          break;
      }
    }
    function handleSubmit(e) {
      console.log('a')
    }
  </script>
    <button on:click={click}>click me</button>
    <input type="range" on:input={onInput} on:change={onChange}>
    <svelte:window on:keyup={onKeyUp} />
    <form on:submit|stopPropagation|preventDefault={handleSubmit}>
      <button type="submit">Submit form</button>
    </form>
    <div style="left:{left}px; top: {top}px;" />
  <style>
    div{
      width: 100px;
      height: 100px;
      background-color: aquamarine;
      position: absolute;
    }
  </style>

