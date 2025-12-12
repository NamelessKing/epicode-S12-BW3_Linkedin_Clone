// Utility functions for date formatting and duration calculation

/**
 * Formatta una data ISO in formato leggibile (es: "gen 2024")
 * @param dateString - Data in formato ISO (es: "2024-01-15T00:00:00.000Z")
 * @returns Data formattata (es: "gen 2024")
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const months = [
    "gen",
    "feb",
    "mar",
    "apr",
    "mag",
    "giu",
    "lug",
    "ago",
    "set",
    "ott",
    "nov",
    "dic",
  ];
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
};

/**
 * Calcola la durata tra due date in formato leggibile
 * @param start - Data di inizio in formato ISO
 * @param end - Data di fine in formato ISO (null se ancora in corso)
 * @returns Durata formattata (es: "1 anno 3 mesi", "6 mesi")
 */
export const calculateDuration = (
  start: string,
  end: string | null
): string => {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();

  const months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  if (months < 1) {
    return "Meno di 1 mese";
  }

  if (months < 12) {
    return `${months} ${months === 1 ? "mese" : "mesi"}`;
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (remainingMonths === 0) {
    return `${years} ${years === 1 ? "anno" : "anni"}`;
  }

  return `${years} ${years === 1 ? "anno" : "anni"} ${remainingMonths} ${
    remainingMonths === 1 ? "mese" : "mesi"
  }`;
};

/**
 * Formatta un periodo di date con durata (stile LinkedIn)
 * @param start - Data di inizio
 * @param end - Data di fine (null se ancora in corso)
 * @returns Stringa formattata (es: "gen 2024 - Presente · 1 anno 2 mesi")
 */
export const formatDateRange = (start: string, end: string | null): string => {
  const startFormatted = formatDate(start);
  const endFormatted = end ? formatDate(end) : "Presente";
  const duration = calculateDuration(start, end);

  return `${startFormatted} - ${endFormatted} · ${duration}`;
};
