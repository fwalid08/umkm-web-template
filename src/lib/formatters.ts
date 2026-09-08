/**
 * Indonesian Rupiah and text formatters
 */
export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Clean compact IDR format e.g. Rp 75rb or Rp 75.000
 */
export function formatCompactRupiah(amount: number): string {
  if (amount >= 1000000) {
    const jt = (amount / 1000000).toFixed(1).replace('.0', '');
    return `Rp ${jt} Jt`;
  }
  return formatRupiah(amount);
}
