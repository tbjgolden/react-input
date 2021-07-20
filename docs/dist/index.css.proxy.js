// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "html,\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,\n    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n* {\n  box-sizing: border-box;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\nmain {\n  padding: 40px;\n  min-height: 100vh;\n}\n\nmain.dark {\n  background: #000;\n  color: #fff;\n}\n\nheader {\n  margin: 0 0 32px;\n}\nfooter {\n  margin: 32px 0 0;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}