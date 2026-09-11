import type { Plugin } from "@opencode-ai/plugin"

const MODEL_NAMES: Record<string, string> = {
  // "provider/model-id": "Friendly Name"
}

let current: { providerID: string; modelID: string } | undefined

export const AiAssistedBy: Plugin = async () => {
  return {
    event: async ({ event }) => {
      if (event.type === "message.updated") {
        const info = (event.properties as any)?.info
        if (info?.providerID && info?.modelID) {
          current = { providerID: info.providerID, modelID: info.modelID }
        }
      }
    },
    "shell.env": async (_input, output) => {
      if (!current) return
      const key = `${current.providerID}/${current.modelID}`
      output.env.AI_ASSISTED_BY = MODEL_NAMES[key] ?? current.modelID
    },
  }
}