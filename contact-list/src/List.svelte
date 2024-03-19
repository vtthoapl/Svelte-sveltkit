<script>
  import contactStore from "./stores/contact.store";
  function onEdit(contactId) {
    contactStore.editContact(contactId)
  }
</script>
{#each $contactStore.contacts as contact (contact.id)}
<div class="row">
  <div class="column">
    Name: {contact.name}
  </div>
  <div class="column">
    Phone: {contact.phone}
  </div>
</div>
<div class="row">
  <div class="column">
    {contact.des}
  </div>
</div>
<div class="row">
  <div class="column">
    <button on:click={onEdit} class="button">Edit</button>
    <button class="button"
      >Delete</button
    >
  </div>
</div>
{/each}
