<script>
    import {onMount, onDestroy, beforeUpdate, afterUpdate} from "svelte";
  let numbers = [];
  let unorderListEle;
  let autoSroll = false;
    onMount(()=>{ 
        const interval = setInterval(() => {
            numbers = [...numbers,numbers.length + 1]
        }, 1000);

        return(()=>{
            clearInterval(interval)
            console.log("also distroy")
        })
    })

    beforeUpdate(()=>{
        console.log("bofere update")
        
    })
    afterUpdate(()=>{
        console.log("after update")
        if(autoSroll){
            unorderListEle.scrollTo(0, unorderListEle.scrollHeight)
        }
    })
    onDestroy(()=> {
        console.log('on destroy')
    });
</script>
<label > auto scroll 
    <input type="checkbox" bind:checked={autoSroll} >

</label>
<ul bind:this={unorderListEle}>
    {#each numbers as num(num ) }
        <li>{num}</li>
    {/each}
</ul>


<style>
    ul{
        max-height: 100px;
        border: solid black 1px;
        overflow: scroll;
    }
</style>