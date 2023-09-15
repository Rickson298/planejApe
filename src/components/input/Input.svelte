<script lang="ts">
	export let placeholder = '';
</script>

<label for="">{placeholder}</label>
<input on:input {placeholder} />

<style lang="scss">
	input {
		padding: 0.75rem 0.875rem;
		border-radius: 0.5rem;
		border: 2px solid var(--blue-300);
		background: transparent;
		transition: all ease 0.2s;
		outline: 1px solid transparent;
		width: 100%;

		&::placeholder {
			color: var(--blue-300);
			transform: translateY(-300px);
		}

		&:focus {
			outline-color: var(--blue-200);
		}
	}
</style>
