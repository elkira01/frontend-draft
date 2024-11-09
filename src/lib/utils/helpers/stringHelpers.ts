export function toCamelCase(field: string) {
  return field.replace(/_./g, (match) => match.charAt(1).toUpperCase());
}

export function toSnakeCase(field: string) {
  return field.replace(/[A-Z]/g, (match) => '_' + match.toLowerCase());
}
