<script lang="ts">

    // --- Components ---
    import { Flex } from "@ui"

    // --- Logic ---
    import { cn } from '@lib/utils';
    import type { Props } from ".."
    
    let {
        children,
        class: className,
        classContainer,
        cardClass = $bindable(`
            rounded-md
            overflow-hidden
            w-80
            bg-white
            dark:bg-black
            gap-4
            
        `),

        // Slots Here:
        slot_image,
    }: Props = $props();


    // Setup Card's class
    let cardCls = $state(cn(cardClass, className));
    $effect(() => {
        cardCls = cn(cardClass, className)
    })

</script>

<Flex.Col class={ cardCls }>

    <Flex.Col class="w-full h-50">
        {@render slot_image?.()}
    </Flex.Col>


    <Flex.Col class={cn("size-full box-border p-4", classContainer)}>
        {@render children?.()}
    </Flex.Col>
</Flex.Col>

<!--@component
    Generated by SvelteForge🔥
-->

