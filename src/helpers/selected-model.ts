/**
 * Función para centralizar el modelo a usar en el proyecto
 *
 * También agregué otras opciones si lo quieres cambiar
 */

// Anthropic:
// pnpm add @ai-sdk/anthropic
import { anthropic } from '@ai-sdk/anthropic';

// Ollama:
// pnpm add ollama-ai-provider-v2
// A diferencia de los anteriores, este es un proveedor comunitario.
import { ollama } from 'ollama-ai-provider-v2';

// Anthropic:
export const model = anthropic('claude-haiku-4-5');

// Ollama:
// export const model = ollama('gpt-oss');
