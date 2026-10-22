// 'YYYY-MM' -> 'Mar 2026'.
export const formatMonth = (value) => {
  const [year, month] = value.split('-').map(Number);
  return new Date(year, month - 1).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
};

export const formatRange = (start, end, presentLabel) =>
  `${formatMonth(start)} – ${end ? formatMonth(end) : presentLabel}`;
