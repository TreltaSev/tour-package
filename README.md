# Sveltekit Static Github Page Template 

Everything you need to setup a github static page using sveltekit and tailwindcss 

## Prerequisites
- [Node](https://nodejs.org/en/download)
- [Just](https://github.com/casey/just)

## Setup Development 
```bash
just setup [bun|npm|pnpm] # setup the project with the package manager of your choice, defaults to bun     
```
 
## Release 
```bash
just release "<release message>"
```
Adds all files, commits your message with git including the [release] flag, then pushes it. Initiating a release action on github.

## Programming Guidelines

### Typescript Types
Start with lowercase 't', followed by capitalized component name. 
```ts
# Example
tComponentProps = {}
```

### In-Component Logic Guidelines
Use as many comments as you can, especially for logic (unless its obvious) 

#### Bad Example
```svelte
<script lang="ts">
	import { cn } from '@lib/utils';
	import type { Props } from '..';

	// -=-=-=-=- Props -=-=-=-=- //
	type $$Props = Props;

	export let href: $$Props['href']= undefined;
	export let newPage: $$Props['newPage']= undefined;

	let className: $$Props['class'] = undefined;
	export { className as class };

	export let buttonClass =
		'flex flex-col p-[10px] px-[20px] justify-center items-center bg-primary-500 rounded-[10px] cursor-pointer overlay h-fit text-white dark:text-white';
	

	$: buttonCls = cn(buttonClass, className);
</script>

{#if href}
	<a {href} class={buttonCls} target={newPage ? "_blank" : "_self"}>
		<button {...$$restProps} on:click>
			<slot />
		</button>
	</a>
{:else}
	<button class={buttonCls} {...$$restProps} on:click>
		<slot />
	</button>
{/if}
```

#### Good Example:
```svelte
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
```

### Svelte Guidelines
Try to stick to [Svelte5](https://svelte.dev/blog/svelte-5-is-alive) whenever possible. Although in certain situations, svelte4 might be more appropriate.

### Components and Sub-Components
Each component itself should be capitalized, but each file is dash-case meaning `component.svelte` or `component-subcomponent.svelte`

