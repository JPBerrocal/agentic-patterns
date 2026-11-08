/**
 * Función para centralizar el modelo a usar en el proyecto
 *
 * También agregué otras opciones si lo quieres cambiar
 */

// Anthropic:
// pnpm add @ai-sdk/anthropic
import { anthropic } from "@ai-sdk/anthropic";

// Ollama:
// pnpm add ollama-ai-provider-v2
// A diferencia de los anteriores, este es un proveedor comunitario.
import { ollama } from "ollama-ai-provider-v2";

// Anthropic:
export const model = anthropic("claude-haiku-4-5");

// Ollama:
//export const model = ollama("gpt-oss:20b");
//export const model = ollama("qwen3-coder-32k");

/*
Probar estos
qwen3.6-builder               96586546a091    22 GB     5 days ago
qwen3.6:35b-a3b (experimental) a7eb95c53bcf    22 GB     5 days ago
qwen3-coder-32k               0bdc0c1f2871    18 GB     5 days ago
qwen2.5-coder:14b
*/
