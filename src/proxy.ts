import { NextRequest, NextResponse } from 'next/server'

export default function proxy(req: NextRequest) {
  const host = req.headers.get('host') ?? ''
  const pathname = req.nextUrl.pathname

  // ปล่อย asset
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next()
  }

  const hostname = host.split(':')[0]

  // main domain
  if (hostname === 'kittipakorn.com') {
    return NextResponse.next()
  }

  // subdomain
  if (hostname.endsWith('.kittipakorn.com')) {
    const sub = hostname.replace('.kittipakorn.com', '')

    if (sub !== 'link') {
      return new NextResponse(null, { status: 404 })
    }

    const url = req.nextUrl.clone()
    url.pathname = `/link${pathname}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}
