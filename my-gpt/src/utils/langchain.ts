import { OpenAI } from '@langchain/openai'

// Langchain connects to models - OpenAI is the model provider
const llm = new OpenAI({
  openAIApiKey: import.meta.env.VITE_OPENAI_KEY,
})

export async function generateAnswer(question: string) {
  let answer = ''

  try {
    answer = await llm.invoke(question)
  } catch (e) {
    console.error(e)
    return 'Something went wrong'
  }

  return answer
}
