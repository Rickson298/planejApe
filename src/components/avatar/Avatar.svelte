<script lang="ts">
	import { Flex, Typography } from '$components';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = {
		fullName: string;
	};

	export let fullName = '';

	$: [firstName, surname] = fullName.split(' ');
	$: initials = `${firstName?.[0] || ''}${surname?.[0] || ''}`;
</script>

<Flex gap="1rem">
	<Typography fontWeight="400">{fullName}</Typography>
	<div class="avatar">
		{initials}
	</div>
</Flex>

<style src="./styles.scss"></style>
