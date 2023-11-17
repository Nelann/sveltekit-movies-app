<script>
	import '../app.postcss';
</script>

<header class="bg-slate-500">
	<nav class="navbar bg-base-100">
		<div class="flex-1">
			<a class="btn btn-ghost normal-case text-xl" href="/" data-sveltekit-preload-code>MovieFlix</a
			>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				<li>
					<a href="/about" data-sveltekit-preload-code>About</a>
				</li>
			</ul>
		</div>
	</nav>
</header>
<main>
	<slot />
</main>
<footer class="p-12">
	<p class="text-center">Made with 💖 and 🍵 by Nelan</p>
	<p class="text-center">&copy; {new Date().getFullYear()}</p>
</footer>
