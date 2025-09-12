function createFetcher(endpoint: string) {
  return async function() {
    // Get the origin based on whether we're in the browser or server
    const origin = typeof window !== 'undefined' ? window.location.origin : process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    
    const res = await fetch(`${origin}/api/${endpoint}`, {
      // These options ensure the request is always fresh
      cache: 'no-store',
      next: { revalidate: 0 }
    })
    if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`)
    return res.json()
  }
}

export const fetchHouses = createFetcher('houses')
export const fetchEvents = createFetcher('events')
export const fetchGallery = createFetcher('gallery')
export const fetchSponsors = createFetcher('sponsors')
