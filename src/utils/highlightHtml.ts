export function highlightHtml(code: string) {
  if (!code) return "";

  const escape = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  let html = escape(code);

  return html;
}
