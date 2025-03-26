import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname from the URL
  const pathname = request.nextUrl.pathname

  // Determine language based on pathname
  let language = "en"

  if (pathname.startsWith("/es/")) {
    language = "es"
  } else if (pathname === "/fr" || pathname.startsWith("/fr/")) {
    language = "fr"
  } else if (pathname === "/de" || pathname.startsWith("/de/")) {
    language = "de"
  } else if (pathname === "/it" || pathname.startsWith("/it/")) {
    language = "it"
  } else if (pathname === "/id" || pathname.startsWith("/id/")) {
    language = "id"
  } else if (pathname === "/pt" || pathname.startsWith("/pt/")) {
    language = "pt"
  } else if (pathname === "/nl" || pathname.startsWith("/nl/")) {
    language = "nl"
  } else if (pathname === "/ru" || pathname.startsWith("/ru/")) {
    language = "ru"
  }

  // Clone the request headers
  const requestHeaders = new Headers(request.headers)

  // Set the x-language header
  requestHeaders.set("x-language", language)

  // Also set the pathname for reference in the layout
  requestHeaders.set("x-pathname", pathname)

  // Return the response with the modified headersk
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: [
    // Match all request paths except for the ones starting with:
    // - api (API routes)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}

