import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Target, Heart, Award, Calendar } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary to-primary/20 text-secondary-foreground py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            About <span className="text-primary">Eclipse 2025</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            The dawn of a new era in Curtin University Colombo&apos;s sporting legacy
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Historic Beginning</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Eclipse 2025 marks a pivotal moment in Curtin University Colombo&apos;s history as we launch our very first
                sports meet. This inaugural event represents more than just competition – it&apos;s the foundation of a
                sporting tradition that will inspire generations of students to come.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Named &quot;Eclipse&quot; to symbolize a moment of extraordinary alignment – where athletic excellence, university
                pride, and community spirit converge to create something truly spectacular. Just as a solar eclipse is a
                rare and awe-inspiring phenomenon, our sports meet promises to be an unforgettable experience that will
                leave a lasting impression on everyone involved.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm">
                  Inaugural Event
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  University Pride
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Athletic Excellence
                </Badge>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Trophy className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">September 20, 2025</h3>
                    <p className="text-muted-foreground">The day that makes history</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* About Curtin Colombo */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Curtin University Colombo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Global Excellence</h3>
                  <p className="text-muted-foreground">
                    Part of Curtin University&apos;s international network, bringing world-class education to Sri Lanka with
                    a focus on innovation and practical learning.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Student-Centered</h3>
                  <p className="text-muted-foreground">
                    Committed to holistic development, we believe in nurturing not just academic excellence but also
                    physical fitness and team spirit.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Community Spirit</h3>
                  <p className="text-muted-foreground">
                    Building a vibrant campus community where students from diverse backgrounds come together to achieve
                    common goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sports Committee */}
          <div className="mb-16">
            <div className="bg-card rounded-lg p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">The Sports Committee</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-muted-foreground mb-6 text-center">
                  Eclipse 2025 is brought to you by the dedicated Sports Committee of Curtin University Colombo, working
                  in collaboration with the Student Guild to create an exceptional sporting experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      Our Mission
                    </h3>
                    <p className="text-muted-foreground">
                      To promote physical fitness, healthy competition, and team spirit among students while creating
                      lasting memories and building stronger bonds within our university community.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Calendar className="h-5 w-5 text-primary mr-2" />
                      Our Vision
                    </h3>
                    <p className="text-muted-foreground">
                      To establish Eclipse as an annual tradition that celebrates athletic achievement, fosters school
                      pride, and brings together the entire Curtin Colombo family in the spirit of friendly competition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event Theme */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Event Theme & Purpose</h2>
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-lg p-8 md:p-12 mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">&quot;Where Champions Rise&quot;</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Eclipse 2025 is more than a sports meet – it&apos;s a celebration of human potential, determination, and
                  the power of unity. Our theme reflects the belief that every participant has the potential to be a
                  champion, whether they win gold or simply give their best effort.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Building Character</h4>
                    <p className="text-muted-foreground text-sm">
                      Through sports, we develop resilience, leadership, and the ability to work as a team – qualities
                      that extend far beyond the playing field.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Creating Memories</h4>
                    <p className="text-muted-foreground text-sm">
                      Eclipse 2025 will create lasting memories and friendships that participants will treasure long
                      after graduation.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Fostering Unity</h4>
                    <p className="text-muted-foreground text-sm">
                      Bringing together students from all faculties and backgrounds in the spirit of healthy competition
                      and mutual respect.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Establishing Legacy</h4>
                    <p className="text-muted-foreground text-sm">
                      Setting the foundation for an annual tradition that will grow and evolve with each passing year.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}