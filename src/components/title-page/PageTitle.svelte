<script>
	import { Flex, Typography } from '$components';

	export let title = '';
	export let subtitle = '';
</script>

<Flex direction="column" alignItems="start">
	<Typography fontSize="2rem" fontWeight="600">{title}</Typography>
	<Typography color="blue-200" fontSize="0.875rem" fontWeight="400">{subtitle}</Typography>
</Flex>
