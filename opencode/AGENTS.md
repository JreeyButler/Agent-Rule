# opencode-specific rules

## `AI-Assisted-by` trailer injection

- `AI_ASSISTED_BY` is injected automatically by the opencode plugin
  `plugins/ai-assisted-by.ts` (through the `shell.env` hook) based on the
  currently active model.
- The plugin listens to `message.updated` events and reads `providerID` /
  `modelID`, so switching models takes effect per message without restarting
  opencode.
- Friendly names can be configured in the `MODEL_NAMES` map at the top of the
  plugin; unmatched models fall back to `modelID`.
- After changing opencode configuration, opencode must be restarted for the
  change to take effect.
