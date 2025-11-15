const vscode = require("vscode");
const marked = require("marked");
const hljs = require("highlight.js");
const path = require("path");

let previewPanel = null;
let statusBarItem = null;

function activate(context) {
  // Register main command
  const disposable = vscode.commands.registerCommand("readmePreview.showPreview", () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage("No active editor found!");
      return;
    }

    const document = editor.document;
    if (document.languageId !== "markdown") {
      vscode.window.showErrorMessage("This command works only on Markdown files!");
      return;
    }

    const docFolder = vscode.Uri.file(path.dirname(document.uri.fsPath));

    // Custom renderer for images
    const renderer = new marked.Renderer();
    renderer.image = ({href, title, text}) => {
      let imgUri;
      try {
        if (/^(https?:)?\/\//.test(href)) {
          imgUri = href; // External URL
        } else {
          const imgPath = vscode.Uri.joinPath(docFolder, href);
          imgUri = previewPanel?.webview.asWebviewUri(imgPath);
        }
      } catch (e) {
        imgUri = href; // Fallback
      }
      const titleAttr = title ? `title="${title}"` : "";
      const altAttr = text ? `alt="${text}"` : "";
      return `<img src="${imgUri}" ${altAttr} ${titleAttr} style="max-width:100%;"/>`;
    };

    // Configure markdown parser with syntax highlighting
    marked.setOptions({
      renderer,
      highlight: (code, lang) => {
        if (hljs.getLanguage(lang)) {
          return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
      }
    });

    // Update or create preview panel
    const updatePreview = () => {
      const text = document.getText();
      const htmlContent = marked.parse(text);
      if (previewPanel) {
        previewPanel.webview.html = getWebviewContent(htmlContent, getCssUri(context, previewPanel));
      }
    };

    if (previewPanel) {
      updatePreview();
      previewPanel.reveal(vscode.ViewColumn.Beside);
    } else {
      previewPanel = vscode.window.createWebviewPanel(
        "readmePreview",
        "Preview README",
        vscode.ViewColumn.Beside,
        { enableScripts: true }
      );
      updatePreview();
      previewPanel.onDidDispose(() => { previewPanel = null; }, null, context.subscriptions);
    }

    // Refresh preview on document save
    vscode.workspace.onDidSaveTextDocument(savedDoc => {
      if (savedDoc.uri.toString() === document.uri.toString()) {
        updatePreview();
      }
    }, null, context.subscriptions);
  });

  context.subscriptions.push(disposable);

  // Status bar item for quick preview access
  statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  statusBarItem.command = "readmePreview.showPreview";
  statusBarItem.text = `$(markdown) Preview`;
  statusBarItem.tooltip = "Preview Markdown (README)";
  context.subscriptions.push(statusBarItem);

  // Show or hide status bar item based on active editor
  const updateStatusBarVisibility = () => {
    const editor = vscode.window.activeTextEditor;
    if (editor && editor.document.languageId === "markdown") {
      statusBarItem.show();
    } else {
      statusBarItem.hide();
    }
  };

  context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(updateStatusBarVisibility));
  context.subscriptions.push(vscode.workspace.onDidOpenTextDocument(updateStatusBarVisibility));

  setTimeout(updateStatusBarVisibility, 200); // Initial check
}

function getCssUri(context, panel) {
  const base = panel.webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, "media", "style.css"));
  const mdLight = panel.webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, "media", "themes", "markdown-light.css"));
  const mdDark = panel.webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, "media", "themes", "markdown-dark.css"));
  const mdHC = panel.webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, "media", "themes", "markdown-high-contrast.css"));
  const hlLight = panel.webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, "media", "themes", "hljs-light.css"));
  const hlDark = panel.webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, "media", "themes", "hljs-dark.css"));
  return { base, mdLight, mdDark, mdHC, hlLight, hlDark };
}

function getWebviewContent(html, cssUris) {
  return `<!DOCTYPE html>
  <html lang="en" data-theme="vscode">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="${cssUris.base}">
    <link rel="stylesheet" href="${cssUris.mdLight}">
    <link rel="stylesheet" href="${cssUris.mdDark}">
    <link rel="stylesheet" href="${cssUris.mdHC}">
    <link rel="stylesheet" href="${cssUris.hlLight}">
    <link rel="stylesheet" href="${cssUris.hlDark}">
  </head>
  <body>
    <article class="markdown-body">
      ${html}
    </article>
  </body>
  </html>`;
}

function deactivate() {
  if (statusBarItem) statusBarItem.dispose();
}

module.exports = { activate, deactivate };
