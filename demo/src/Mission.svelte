<script>
    import {createEventDispatcher} from "svelte"
    const dispatcher= createEventDispatcher()

    let address;
    let birth;
    function onSubmit(e){
      dispatcher("custome_event",{
        address,
        birth
      })
      
    }

</script>

<form on:submit|preventDefault={onSubmit}>
    <label for="address">address</label>
    <input type="text" bind:value={address} id="address">
    <label for="birth">birth</label>
    <input type="year" bind:value={birth} id ="birth">
    <button type="submit">submit</button>
</form>

<h1>{address}, {birth}</h1>

<style>
    form{
        width: 90%; 
        height: 300px;
        background-color: aquamarine;
    }
</style>