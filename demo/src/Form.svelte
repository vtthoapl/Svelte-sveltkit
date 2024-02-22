<script>
    let name = "Peter";
    let age = "50";
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();
    function onSubmit(e) {
        dispatch("form_submit",{
            name,
            age
        })
    }
</script>

<form on:submit|preventDefault={onSubmit}>
    <label for="name"></label>
    <input type="text" bind:value={name} id="name"/>
    <label for="age"></label> 
    <input type="number" bind:value = {age} id="age">
    <button type="submit" >Submit</button>
</form>

<button on:click>click me</button>