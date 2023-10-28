export function formatCurrency(amount: number, locale?: string, currency?: string) {
	const formatter = new Intl.NumberFormat(locale || 'pt-BR', {
		style: 'currency',
		currency: currency || 'BRL'
	});
	return formatter.format(amount);
}
