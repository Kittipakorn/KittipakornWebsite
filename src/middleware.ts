import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') ?? ''
  const pathname = req.nextUrl.pathname

  // ปล่อย static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next()
  }

  const hostname = host.split(':')[0]

  // =========================
  // 1. Root domain
  // =========================
  if (hostname === 'kittipakorn.com') {
    return NextResponse.next()
  }

  // =========================
  // 2. Localhost (dev)
  // =========================
  if (hostname === 'localhost') {
    return NextResponse.next()
  }

  // =========================
  // 3. Subdomain
  // =========================
  if (hostname.endsWith('.kittipakorn.com')) {
    const tenant = hostname.replace('.kittipakorn.com', '')

    const url = req.nextUrl.clone()
    url.pathname = `/${tenant}${pathname}`

    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
