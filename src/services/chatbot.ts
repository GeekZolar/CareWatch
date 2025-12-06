type ChatbotResponse =
  | {
      reply?: string
      message?: string
      answer?: string
    }
  | undefined

const API_URL = import.meta.env.VITE_CHATBOT_API

export const requestChatbotResponse = async (prompt: string): Promise<string | null> => {
  if (!API_URL) {
    throw new Error('Chatbot API is not configured. Set VITE_CHATBOT_API in your .env file.')
  }

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: prompt }),
  })

  if (!response.ok) {
    throw new Error(`Chatbot API responded with status ${response.status}`)
  }

  const data = (await response.json()) as ChatbotResponse
  return data?.reply ?? data?.message ?? data?.answer ?? null
}


