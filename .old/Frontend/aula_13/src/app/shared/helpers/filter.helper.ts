export type TFindAllFilterValue = string | number | boolean | null | undefined;

export interface IFindAllFilter {
  column: string;
  value: TFindAllFilterValue;
}

export function handleFindAllFilter(
  originalFiltter: Record<string, unknown>,
): string {
  const filters: IFindAllFilter[] = [];

  Object.keys(originalFiltter).forEach((key) => {
    const value = originalFiltter[key] as TFindAllFilterValue;

    if (typeof value !== 'boolean' && !value) return;

    filters.push({ column: key, value });
  });

  return JSON.stringify(filters);
}
