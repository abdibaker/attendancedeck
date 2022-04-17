<script lang="ts">
	import { sTitle } from './store';

	sTitle.set('SignIn');
</script>

<div class="form-control">
	<label for="password" class="label">
		<span class="label-text">Password</span>
	</label>
	<input id="password" type="text" placeholder="password" class="input input-bordered" />
	<label for="forgotPassword" class="label">
		<a href="/auth/forgot-password" class="label-text-alt link link-hover">Forgot password?</a>
	</label>
</div>
<div class="form-control mt-4 mb-2">
	<button class="btn btn-primary">Login</button>
</div>
<label for="signUp" class="label">
	<a href="/auth/signup" class="label-text-alt link link-hover">Need an account? Register</a>
</label>
