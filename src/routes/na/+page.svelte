<script lang="ts">
	import { Flex } from "@root/lib/ui";
import { getPageCtx } from "@root/lib/ui/page/ctx";


    const {hideDrawer$} = getPageCtx()

    // Hide Drawer
    hideDrawer$.set(true)
</script>

<Flex.Col class="px-[20%] box-border items-center justify-center bg-gray-800 size-full">
    <span class="text-white/80">This feature is not available yet (and prob wont be)</span>
</Flex.Col>