<script lang="ts">
    import Comp from '$lib/comp.svelte'

    let x: Comp

    $: if (x) console.log(x.value1, x.api.value2, x.api.value3)
</script>

<Comp bind:this={x} />
