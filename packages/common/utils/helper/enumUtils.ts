export function getKeyByValue<T extends string | number>(
  enumObj: Record<string, T>,
  value: T,
): keyof typeof enumObj | undefined {
  return Object.keys(enumObj).find((key) => enumObj[key] === value);
}

export function enumToOptions<T extends Record<string, string>>(
  enumObject: T,
): { value: string; label: string }[] {
  return Object.values(enumObject).map((value) => ({
    value,
    label: value.replace(/_/g, ' '),
  }));
}
