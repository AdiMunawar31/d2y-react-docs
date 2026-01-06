export function highlightJsx(code: string) {
  return code
    .replace(/(const|return|=>)/g, `<span class="text-purple-400">$1</span>`)
    .replace(
      /(&lt;\/?)([A-Z][A-Za-z0-9]*)/g,
      `$1<span class="text-cyan-400">$2</span>`
    )
    .replace(/className/g, `<span class="text-orange-400">className</span>`);
}
