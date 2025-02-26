<script lang="ts">
	import { cn } from '@lib/utils';
	import type { Props } from '..';

	// -=-=-=-=- Props -=-=-=-=- //
	type $$Props = Props;

	// Specified Props
	export let href: $$Props['href'] = undefined;
	export let newPage: $$Props['newPage'] = undefined;

	// Component Classes
	let className: $$Props['class'] = undefined;
	export { className as class };
	export let buttonClass =
		'flex flex-col p-[10px] px-[20px] justify-center items-center bg-primary-500 rounded-[10px] cursor-pointer overlay h-fit text-white dark:text-white';

	// Reactive Component CLass
	$: buttonCls = cn(buttonClass, className);
</script>

<!-- If the `href` prop is passed, treat the button as an a tag-->
{#if href}
	<a {href} class={buttonCls} target={newPage ? '_blank' : '_self'}>
		<button {...$$restProps} on:click>
			<slot />
		</button>
	</a>
{:else}
	<!-- Regular button :P -->
	<button class={buttonCls} {...$$restProps} on:click>
		<slot />
	</button>
{/if}
