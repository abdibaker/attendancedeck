<script lang="ts">
	import { sTitle } from './store';

	sTitle.set('SignUp');
</script>

<div class="form-control">
	<label for="password" class="label">
		<span class="label-text">Password</span>
	</label>
	<input id="password" type="text" placeholder="password" class="input input-bordered" />
</div>
<div class="form-control">
	<label for="confirm-password" class="label">
		<span class="label-text">Confirm Password</span>
	</label>
	<input id="confirm-password" type="text" placeholder="password" class="input input-bordered" />
</div>
<div class="form-control mt-4 mb-2">
	<button class="btn btn-primary">signUp</button>
</div>
<label for="signUp" class="label">
	<a href="/auth/signin" class="label-text-alt link link-hover">Have an account? Login</a>
</label>
