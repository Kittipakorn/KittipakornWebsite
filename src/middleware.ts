import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') ?? ''
  const pathname = req.nextUrl.pathname

  // ปล่อย asset
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon')
  ) {
    return NextResponse.next()
  }

  // เฉพาะ link.kittipakorn.com
  if (host === 'link.kittipakorn.com') {

    // ✅ ถ้าอยู่ใต้ /link แล้ว ไม่ redirect ซ้ำ
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
