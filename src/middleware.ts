import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') ?? ''
  const pathname = req.nextUrl.pathname

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon')
  ) {
    return NextResponse.next()
  }

  if (host === 'link.kittipakorn.com') {

    if (pathname.startsWith('/link')) {
      return NextResponse.next()
    }

    const url = req.nextUrl.clone()
    url.pathname = `/link${pathname}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
