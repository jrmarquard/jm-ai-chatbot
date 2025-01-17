# jm-ai-chatbot

A simple demo of a 2x locally hosted chatbots using Next, Vercel, and Ollama.

For fun and a crashcourse through new libraries.

## Build & Run

**Model**

1. install Ollama. `brew install ollama`
1. Start service. `brew services start ollama`
1. Find model on [ollama.com](https://ollama.com/library)
1. Install and run (e.g. phi3) `ollama run phi3` 

**Step 1: Chat App**

1. Create __neat app__ with pnpm dlx. `pnpm dlx create-next-app@latest --use-pnpm cheap-ai-chat`
1. Hop into dir, `cd cheap-ai-chat`
1. Install dependencies
    1. `pnpm add ai` — AI toolkit from Vercel
    1. `pnpm add ollama` — what we use on cmd line to interface with Ollama
    1. `pnpm add ollama-ai-provider` — connects vercel SDK to Ollama
1. Modify `page.tsx`
1. Run server. `pnpm dev`
1. Create `api/chat/route.ts` to receive the form submissions and stream to ollama
1. Format the response (as it is markdown). Install react-markdown `pnpm add react-markdown`
1. Visit http://localhost:3001 (or whatever local url is displayed) to use the app
1. Done

**Step 2: Photo Review App**

1. install llava-llama3. `ollama run llava-llama3` ([read more](https://ollama.com/library/llava-llama3))
1. Create next app (as above)
1. Additionally install React Dropzone. `react-dropzone`
1. Update `page.tsx` to receive images
1. Create `/api/chat/route.ts` to stream response from `llava-llama3`.

**Note**: Had to set `allowEmptySubmit=true` to get `handleSubmit()` to send POST to API. No idea why.

`llava-llama3`: A LLaVA model fine-tuned from Llama 3 Instruct.

![](photo-review-demo.jpg)

__Example of the photo review chat bot in action__


## Command reference

List out models.

`ollama list`

Remove model.

`ollama rm <model_name>`

## Questions for myself

**What is Tailwind CSS?**

> utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup — __Source: [tailwindcss.com](https://tailwindcss.com/)__

Utility first = naming based on function. e.g.

```html
<p class="text-center font-bold text-green-500">
```

Can become bloated, however you don't have arbitrary class names that can be confusing, add extra mental overhead, and be easily broken. Scales well for large projects and is descriptive. For small projects, [Pico CSS](https://picocss.com/) might be good.

**What is pnpm dlx?**

> Fetches a package from the registry without installing it as a dependency, hotloads it, and runs whatever default command binary it exposes. — Source: [pnpm dlx docs](https://pnpm.io/cli/dlx)


