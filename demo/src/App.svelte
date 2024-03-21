<script>
  import Box from "./Box.svelte";
</script>
<Box>
<h1 slot = "top">hello word</h1>
<div slot = "bottom"><p>im bottom</p></div>
<h6 slot="middle">middle</h6>

</Box>