// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }

  interface SoundData {
    name: string
    emoji: string
    src: { default: string }
    animation?: string
  }
}

export {}
