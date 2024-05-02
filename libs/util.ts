type Publication = { published?: boolean; date: string };

/** Format date */
export function formatDate(date: string, onlyYear = false) {
  return new Date(date).toLocaleDateString('en-US', {
    ...(!onlyYear && { day: 'numeric', month: 'long' }),
    year: 'numeric',
  });
}

/** Get published items */
export function getPublicationItems<T extends Publication>(items: T[]) {
  return items.filter((item) => item?.published);
}

/** Sorts blog by date in descending order */
export function sortPublicationByDate<T extends Publication>(
  items: T[],
  descending = true
) {
  return getPublicationItems(items).sort((a, b) => {
    if (a.date > b.date) return descending ? -1 : 1;
    if (a.date < b.date) return descending ? 1 : -1;
    return 0;
  });
}

/** Paginates publications */
export function paginatePublications<T extends Publication>(
  items: T[],
  page: number,
  perPage: number
) {
  return sortPublicationByDate(items).slice(
    perPage * (page - 1),
    perPage * page
  );
}
