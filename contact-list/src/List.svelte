<script>
  import contactStore from "./stores/contact.store";
</script>
{$contactStore.contacts}
{#each $contactStore.contacts as contact (contact.id)}
<div>{contact.name}</div>
{/each}
