<script>
	import { page } from '$app/stores';
</script>

<section class="max-w-[900px] md:mx-auto mx-4 h-screen grid place-content-center space-y-4">
	<h1 class="font-semibold text-red-500 text-4xl text-center">
		{$page?.status}: {$page?.error?.message}
	</h1>
	<h1 class="italic text-center">Oops. Something when wrong page {$page?.error?.message}...</h1>
	<div class="text-center">
		<a class="btn btn-primary" href="/">Back to home</a>
	</div>
</section>
