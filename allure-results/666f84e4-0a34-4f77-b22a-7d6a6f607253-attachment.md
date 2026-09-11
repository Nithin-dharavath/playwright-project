# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: alert.spec.js >> alert capture
- Location: tests\alert.spec.js:7:5

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "alert"
Received string:    "prompt"
```

```
Error: "context" and "page" fixtures are not supported in "afterAll" since they are created on a per-test basis.
If you would like to reuse a single page between tests, create context manually with browser.newContext(). See https://aka.ms/playwright/reuse-page for details.
If you would like to configure your page before each test, do that in beforeEach hook instead.
```