import type { Config, Context } from '@netlify/edge-functions'

export default async (req: Request, context: Context) => {
  const jwt = context.cookies.get('nf_jwt')
  if (!jwt) {
    return Response.redirect(new URL('/login.html', req.url), 302)
  }
}

export const config: Config = {
  path: '/*',
  excludedPath: ['/.netlify/*', '/login.html'],
}
