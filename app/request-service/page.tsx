"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText } from "lucide-react"
import Image from "next/image"

export default function RequestServicePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/bes-logo.png"
              alt="Bowers Engineering Services"
              width={48}
              height={48}
              className="rounded-xl shadow-lg"
            />
            <h1 className="text-2xl font-black text-foreground">Bowers Inspections</h1>
          </div>
          <nav className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-foreground hover:text-primary flex items-center gap-2 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative py-16 px-4 bg-gradient-to-br from-card via-background to-muted/30">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Get Your Inspection
            </div>
            <h2 className="text-5xl font-black mb-6">
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                Request Non-Invasive
              </span>{" "}
              <span className="text-foreground">Structural Inspection</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Complete our detailed project form below and our expert team will contact you within 24 hours to discuss
              your requirements and provide a customized solution.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-2 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b">
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  Project Request Form
                </CardTitle>
                <CardDescription className="text-lg">
                  Fill out the form below with your project details and requirements.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full">
                  <iframe
                    src="https://app.smartsheet.com/b/form/17757487c946435288558258a6fb460c"
                    width="100%"
                    height="800"
                    frameBorder="0"
                    className="rounded-b-lg"
                    title="Bowers Engineering Project Request Form"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="text-center p-6 bg-card/50 rounded-xl border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h4 className="font-bold text-lg mb-2">Fill Out Form</h4>
              <p className="text-muted-foreground">Complete our detailed project intake form with your requirements</p>
            </div>

            <div className="text-center p-6 bg-card/50 rounded-xl border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h4 className="font-bold text-lg mb-2">Expert Review</h4>
              <p className="text-muted-foreground">
                Our engineers review your project and prepare a customized proposal
              </p>
            </div>

            <div className="text-center p-6 bg-card/50 rounded-xl border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h4 className="font-bold text-lg mb-2">Quick Response</h4>
              <p className="text-muted-foreground">We contact you within 24 hours to discuss next steps</p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-xl p-6 border-2 border-dashed border-primary/30 mt-12">
            <p className="text-base text-muted-foreground font-medium text-center">
              <strong className="text-foreground">Need help?</strong> If you have any questions about the form or our
              services, feel free to contact us directly at{" "}
              <Link href="tel:2603330900" className="text-primary hover:underline font-semibold">
                (260) 333-0900
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-12 px-4 bg-card/30 mt-16">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Image
              src="/images/bes-logo.png"
              alt="Bowers Engineering Services"
              width={40}
              height={40}
              className="rounded-xl shadow-lg"
            />
            <span className="text-xl font-black">Bowers Engineering</span>
          </div>
          <p className="text-muted-foreground text-lg">Professional non-invasive structural engineering services</p>
        </div>
      </footer>
    </div>
  )
}
