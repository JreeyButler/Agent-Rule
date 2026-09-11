# Agent rules (applicable to all agent tools)

## Git commit convention (when the user asks to commit)

- Use `git commit -s` and add an `AI-Assisted-by:` trailer carrying the active
  model name: `git commit -s --trailer="AI-Assisted-by: $AI_ASSISTED_BY"`.
- If the `AI_ASSISTED_BY` environment variable is empty or unset, use the
  fallback instead: `git commit -s --trailer="Assisted-by: AI"`.
- Never ask the user for the model name.
- The trailer order relative to `Signed-off-by:` does not matter.
