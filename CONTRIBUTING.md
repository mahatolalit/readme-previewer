# Contributing Guide

Thank you for your interest in contributing to Readme Previewer! 🎉

We welcome contributions from everyone. By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)
- [Questions](#questions)

---

## 🚀 Getting Started

Before you begin:
- Make sure you have [Node.js](https://nodejs.org/) (v14 or higher) and [npm](https://www.npmjs.com/) installed
- Have [Visual Studio Code](https://code.visualstudio.com/) installed for testing
- Familiarize yourself with [VS Code Extension API](https://code.visualstudio.com/api)

---

## 💻 Development Setup

1. **Fork the repository**
   
   Click the "Fork" button at the top right of the [repository page](https://github.com/mahatolalit/readme-previewer).

2. **Clone your fork**
   
   ```bash
   git clone https://github.com/YOUR-USERNAME/readme-previewer.git
   cd readme-previewer
   ```

3. **Install dependencies**
   
   ```bash
   npm install
   ```

4. **Open in VS Code**
   
   ```bash
   code .
   ```

5. **Test the extension**
   
   - Press `F5` to open a new VS Code window with the extension loaded
   - Open any `.md` file and run the command `Preview README` from the Command Palette
   - Test your changes in the Extension Development Host window

---

## 🤝 How to Contribute

### Types of Contributions

We welcome various types of contributions:

- 🐛 **Bug fixes**: Fix issues and improve stability
- ✨ **New features**: Add new functionality to the extension
- 📝 **Documentation**: Improve README, add examples, or clarify usage
- 🎨 **UI/UX improvements**: Enhance the preview styling and layout
- ⚡ **Performance**: Optimize rendering and reduce resource usage
- 🧪 **Tests**: Add or improve test coverage
- 🌐 **Translations**: Help translate the extension

---

## 📐 Coding Standards

### JavaScript Style Guide

- Use **ES6+** syntax where appropriate
- Use **camelCase** for variable and function names
- Use **PascalCase** for class names
- Add **JSDoc comments** for public functions
- Keep functions small and focused (single responsibility)
- Use meaningful variable and function names

### Example:

```javascript
/**
 * Generates HTML content for the markdown preview
 * @param {string} markdown - The markdown content to render
 * @param {string} styles - CSS styles to apply
 * @returns {string} The complete HTML document
 */
function generatePreviewHtml(markdown, styles) {
    // Implementation
}
```

### File Organization

- Keep `extension.js` focused on VS Code API integration
- Separate concerns (markdown parsing, HTML generation, styling)
- Create utility files for reusable functions if needed

---

## 📝 Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages:

### Format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code changes that neither fix a bug nor add a feature
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Changes to build process or auxiliary tools

### Examples:

```bash
feat: add support for custom CSS themes
fix: prevent preview from breaking with large files
docs: update installation instructions in README
perf: optimize markdown rendering for large documents
```

---

## 🔀 Pull Request Process

1. **Create a new branch**
   
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes**
   
   - Write clean, well-documented code
   - Test your changes thoroughly in the Extension Development Host
   - Update documentation if necessary

3. **Update the CHANGELOG**
   
   Add your changes to `CHANGELOG.md` under the "Unreleased" section

4. **Commit your changes**
   
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

5. **Push to your fork**
   
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**
   
   - Go to the [original repository](https://github.com/mahatolalit/readme-previewer)
   - Click "New Pull Request"
   - Select your branch and fill out the PR template
   - Provide a clear description of your changes
   - Link any related issues

### PR Checklist

Before submitting, ensure:

- [ ] Code follows the project's style guidelines
- [ ] Changes have been tested in VS Code
- [ ] Documentation has been updated (if applicable)
- [ ] CHANGELOG.md has been updated
- [ ] Commit messages follow the conventional commits format
- [ ] No console errors or warnings appear
- [ ] The extension activates and works as expected

---

## 🐛 Reporting Bugs

If you find a bug, please [open an issue](https://github.com/mahatolalit/readme-previewer/issues/new) with the following information:

### Bug Report Template:

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain the problem.

**Environment:**
- OS: [e.g., Windows 11, macOS 14]
- VS Code Version: [e.g., 1.85.0]
- Extension Version: [e.g., 0.0.3]

**Additional context**
Any other information about the problem.
```

---

## 💡 Suggesting Features

We love new ideas! To suggest a feature:

1. **Check existing issues** to see if it's already been suggested
2. [Open a new issue](https://github.com/mahatolalit/readme-previewer/issues/new) with the label "enhancement"

### Feature Request Template:

```markdown
**Is your feature request related to a problem?**
A clear description of the problem. Ex. I'm always frustrated when [...]

**Describe the solution you'd like**
A clear description of what you want to happen.

**Describe alternatives you've considered**
Any alternative solutions or features you've considered.

**Additional context**
Any other context, mockups, or examples about the feature.
```

---

## ❓ Questions

If you have questions about contributing:

- 📖 Check the [README](README.md) for project documentation
- 💬 Open a [discussion](https://github.com/mahatolalit/readme-previewer/issues) with your question
- 📧 Reach out to the maintainer via GitHub

---

## 📜 License

By contributing to Readme Previewer, you agree that your contributions will be licensed under the same license as the project (see [LICENSE](LICENSE)).

---

## 🙏 Thank You!

Your contributions make this project better for everyone. We appreciate your time and effort! ❤️
