export function stringToHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
export function htmlToString(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
}
export function escapeRegex(str: string): string {
  return str.replace(/[-\/\\^$.*+?()[\]{}|]/g, '\\$&');
}
export function unescapeRegex(str: string): string {
  return str.replace(/\\[-\/\\^$.*+?()[\]{}|]/g, '$&');
}
export function isValidRegex(str: string): boolean {
  try {
    new RegExp(str);
    return true;
  } catch (e) {
    return false;
  }
}
export function isEmpty(str: string): boolean {
  return str.trim() === '';
}
export function isNotEmpty(str: string): boolean {
  return str.trim() !== '';
}