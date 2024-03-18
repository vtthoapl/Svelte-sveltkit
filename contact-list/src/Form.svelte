<script>
  import contactStore from "./stores/contact.store";
    export let name="";
    export let phone="";
    export let des="";

    function handleSubmit() {
        if ($contactStore.editId === undefined) {
            contactStore.add(name,phone,des)
        }

        name = " ";
        phone = "";
        des = "";
    }
</script>
<div class="row">
    <div class="column">Create</div>
</div>

<div class="row">
    <div class="column">
        <form on:submit|preventDefault={handleSubmit}>
            <h2>Add Contact</h2>
            <fieldset>
              <label for="nameField">Name</label>
              <input type="text" placeholder="CJ Patoilo" id="nameField" bind:value={name}>
              <label for="phone">Phone</label>
              <input type="tel" placeholder="+358..." id="phone" bind:value={phone}>
              <label for="description">Description</label>
              <textarea id="description" bind:value={des}></textarea>
              <input class="button-primary" type="submit" value="Create" />
            </fieldset>
          </form>
    </div>
</div>