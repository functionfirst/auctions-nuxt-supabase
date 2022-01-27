import { Context } from '@nuxt/types'

const requireAuth = async ({ $services, redirect, route }: Context) => {
  if (!process.client) { return }

  const session = await $services.auth.session()
  if (session) { return }

  return redirect(`/login?redirect=${route.path}`)
}

export default requireAuth
