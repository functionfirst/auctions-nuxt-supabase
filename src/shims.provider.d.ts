import { IProvider } from '@/src/services'

declare module '@nuxt/types' {
  interface Context {
    $services: IProvider
  }
}
