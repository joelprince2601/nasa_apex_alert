import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Only initialize AI if API key is available (for production/runtime)
// During build time, this will be undefined and won't cause errors
export const ai = process.env.GOOGLE_AI_API_KEY ? genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.5-flash',
}) : null;
