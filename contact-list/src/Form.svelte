<script>
  import { onDestroy } from "svelte";
  import contactStore from "./stores/contact.store";
    export let name="";
    export let phone="";
    export let des="";
    $:title = $contactStore.editId? "Edit Contact" : "Add Contact";
    function handleSubmit() {
        if ($contactStore.editId === undefined) {
            contactStore.add(name,phone,des)
        } else {
            contactStore.edit($contactStore.editId, name, phone, des)
        }

        name = "";
        phone = "";
        des = "";
    }

    const unsub = contactStore.subscribe(({ contacts, editId }) => {
    if (!editId) return;
    const contact = contacts.find((c) => c.id === editId);
    name = contact.name;
    des = contact.des;
    phone = contact.phone;
  });
 onDestroy(()=>{
    unsub()
 });
</script>
<div class="row">
    <div class="column"><h3>{title}</h3></div>
</div>

<div class="row">
    <div class="column">
        <form on:submit|preventDefault={handleSubmit}>
            <fieldset>
              <label for="nameField">Name</label>
              <input type="text" placeholder="CJ Patoilo" id="nameField" bind:value={name}>
              <label for="phone">Phone</label>
              <input type="tel" placeholder="+358..." id="phone" bind:value={phone}>
              <label for="description">Description</label>
              <textarea id="description" bind:value={des}></textarea>
              <button class="button" type="submit">{title}</button>
            </fieldset>
          </form>
    </div>
</div>