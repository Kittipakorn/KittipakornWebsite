import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') ?? ''
  const pathname = req.nextUrl.pathname

  console.log('HOST:', host, 'PATH:', pathname)

  // ✅ ปล่อย Next.js assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next()
  }

  const hostname = host.split(':')[0]

  // localhost ปกติ
  if (hostname === 'kittipakorn.com') {
    return NextResponse.next()
  }

  // *.localhost
  if (hostname.endsWith('.kittipakorn.com')) {
    const sub = hostname.replace('.kittipakorn.com', '')

    if (sub !== 'link') {
      return new NextResponse(null, { status: 404 })
    }

    // ✅ me.localhost → /me
    const url = req.nextUrl.clone()
    url.pathname = `/link${pathname}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
