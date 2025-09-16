export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-serif font-bold text-foreground">
                Admin Panel
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="/admin/houses"
                className="text-foreground hover:text-accent transition-colors px-3 py-2 rounded-md"
              >
                Houses
              </a>
              <a
                href="/admin/events"
                className="text-foreground hover:text-accent transition-colors px-3 py-2 rounded-md"
              >
                Events
              </a>
              <a
                href="/admin/gallery"
                className="text-foreground hover:text-accent transition-colors px-3 py-2 rounded-md"
              >
                Gallery
              </a>
              <a
                href="/admin/sponsors"
                className="text-foreground hover:text-accent transition-colors px-3 py-2 rounded-md"
              >
                Sponsors
              </a>

            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 pt-20 pb-8">
        {children}
      </main>
    </div>
  )
}