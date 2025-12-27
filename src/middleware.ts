import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') ?? ''
  const pathname = req.nextUrl.pathname

  // ปล่อย asset ของ Next
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon')
  ) {
    return NextResponse.next()
  }

  // เฉพาะ link.kittipakorn.com
  if (host === 'link.kittipakorn.com') {
    const url = req.nextUrl.clone()
    url.pathname = `/link${pathname}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
