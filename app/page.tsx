import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, BookIcon, NotepadTextIcon, Zap, MedalIcon, PresentationIcon } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src="/images/bes-logo.png"
                alt="Bowers Engineering Services Logo"
                width={48}
                height={48}
                className="rounded-xl shadow-lg"
              />
            </div>
            <h1 className="text-2xl font-black text-foreground">Bowers Inspections</h1>
          </div>
          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-foreground hover:text-primary font-medium transition-colors">
              Services
            </Link>
            <Link href="/request-service">
              <Button className="font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get Quote
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-blue-50/30 via-background to-slate-50/40">
        <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-muted opacity-60"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-100/15 rounded-full blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Innovative Solutions for Structural Integrity
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
              <span className="text-foreground">Non-Invasive</span>{" "}
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">Structural</span>{" "}
              <span className="text-foreground">Inspections</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              Fast, accurate, and professional structural inspections—right when you need them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/request-service">
                <Button
                  size="lg"
                  className="text-lg px-10 py-6 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Get a Quote
                </Button>
              </Link>
              <Link href="https://www.bowerseng.com/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-10 py-6 font-semibold border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                >
                  Bowers Engineering Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-50/20 via-orange-50/10 to-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black mb-4">Why Choose Us?</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Identification of readily apparent defects with noninvasive means.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookIcon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">Quick &amp; Easy Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Our online Inspection Request Form lets you start the process in minutes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <NotepadTextIcon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">Expert Structural Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  We evaluate the condition of any building using non-invasive methods to quickly identify visible
                  defects.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MedalIcon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">Trusted by Legal &amp; Insurance Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Our inspections and consultations support a wide range of legal and insurance needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <PresentationIcon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">Clear, Actionable Results</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  You receive straightforward findings you can rely on for informed decision-making.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-purple-50/20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black mb-4">Our Services</h3>
            <p className="text-xl text-muted-foreground">Types of Home and Situations</p>
          </div>
          <div className="space-y-8">
            <Card className="border-l-4 border-l-primary hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                  Manufactured Homes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg leading-relaxed">
                  Comprehensive structural evaluations for manufactured and mobile homes, ensuring stability, safety,
                  and compliance with industry standards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-2xl font-bold group-hover:text-accent transition-colors">
                  Conventional Homes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg leading-relaxed">
                  Detailed inspections of single-family and multi-family residences to identify visible structural
                  concerns and maintenance needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                  Fire Damage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg leading-relaxed">
                  Expert assessment of structural integrity after fire incidents, documenting visible damage to support
                  repair planning and insurance claims.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-2xl font-bold group-hover:text-accent transition-colors">
                  Special Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg leading-relaxed">
                  Tailored inspection and consultation services for unique or complex structures, customized to meet
                  specific client and project requirements.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary via-accent to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h3 className="text-4xl font-black mb-6 text-white">Ready to Get Started?</h3>
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            Contact us today for a consultation and discover how our revolutionary non-invasive structural engineering
            services can transform your project outcomes.
          </p>
          <Link href="/request-service">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-12 py-6 font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Request Your Assessment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
