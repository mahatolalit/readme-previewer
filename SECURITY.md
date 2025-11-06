# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Currently supported versions:

| Version | Supported          |
| ------- | ------------------ |
| latest  | :white_check_mark: |

## Reporting a Vulnerability

We take the security of readme-previewer seriously. If you discover a security vulnerability, please follow these steps:

### How to Report

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via one of the following methods:

1. **GitHub Security Advisories** (Preferred)
   - Navigate to the [Security tab](https://github.com/mahatolalit/readme-previewer/security/advisories)
   - Click "Report a vulnerability"
   - Fill out the form with details about the vulnerability

2. **Direct Contact**
   - Email the repository maintainer directly through their GitHub profile
   - Include "SECURITY" in the subject line

### What to Include

Please include the following information in your report:

- Type of vulnerability (XSS, injection, etc.)
- Full paths of source file(s) related to the vulnerability
- Location of the affected source code (tag/branch/commit or direct URL)
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the vulnerability, including how an attacker might exploit it

### Response Timeline

- **Initial Response**: Within 48 hours of receiving your report
- **Status Updates**: Regular updates every 5-7 days
- **Resolution**: We aim to patch critical vulnerabilities within 30 days

## Security Considerations

### For Users

When using readme-previewer, please be aware:

1. **Input Sanitization**: Be cautious when previewing README files from untrusted sources
2. **Client-Side Rendering**: The application renders Markdown on the client side - ensure you trust the content being previewed
3. **Dependencies**: Keep your installation updated to receive security patches from dependencies

### For Contributors

When contributing to this project:

1. **Code Review**: All code changes must be reviewed before merging
2. **Dependencies**: 
   - Avoid introducing dependencies with known vulnerabilities
   - Run `npm audit` before submitting pull requests
   - Keep dependencies up to date
3. **Input Validation**: Always sanitize and validate user input
4. **XSS Prevention**: Be vigilant about Cross-Site Scripting (XSS) vulnerabilities, especially when rendering user-provided Markdown
5. **Safe HTML Rendering**: Use proper sanitization libraries when converting Markdown to HTML

## Security Best Practices

### Recommended Security Measures

1. **Content Security Policy (CSP)**: Implement appropriate CSP headers
2. **Markdown Sanitization**: Ensure all rendered Markdown is properly sanitized
3. **Dependency Scanning**: Regularly audit dependencies for vulnerabilities
4. **HTTPS Only**: Always serve the application over HTTPS in production

### Known Security Considerations

- **Markdown Rendering**: Markdown can contain HTML and JavaScript. We use sanitization to prevent XSS attacks
- **External Links**: Preview may render external links and images from README files
- **File Upload**: If file upload functionality exists, ensure proper file type validation

## Automated Security

This repository uses:

- **Dependabot**: Automated dependency updates and security alerts
- **npm audit**: Regular vulnerability scanning of JavaScript dependencies
- **Code Scanning**: GitHub's security scanning tools (if enabled)

## Security Updates

Security updates will be released as:

1. **Patch releases** for minor vulnerabilities
2. **Minor releases** for moderate vulnerabilities
3. **Immediate patches** for critical vulnerabilities

Users will be notified through:
- GitHub Security Advisories
- Release notes
- Repository README updates

## Disclosure Policy

- Security vulnerabilities will be disclosed publicly only after a patch is available
- Credit will be given to security researchers who responsibly disclose vulnerabilities (if desired)
- A security advisory will be published with details about the vulnerability and the fix

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [npm Security Best Practices](https://docs.npmjs.com/auditing-package-dependencies-for-security-vulnerabilities)

## Questions?

If you have questions about this security policy, please open a discussion in the repository or contact the maintainers.

---

**Last Updated**: 2025-08-19

Thank you for helping keep readme-previewer and its users safe!
