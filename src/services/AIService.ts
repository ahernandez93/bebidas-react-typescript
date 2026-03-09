import { streamText } from 'ai'
import { openrouter } from '../lib/ai'

export default {
    async generateRecipe(prompt: string) {
        const result = await streamText({
            // model: openrouter.chat('google/gemm a-3-4b-it:free'),
            model: openrouter.chat('qwen/qwen3-vl-30b-a3b-thinking'),
            // model: openrouter.chat('z-ai/glm-4.5-air:free'),
            prompt
        })

        return result.textStream

    }
}