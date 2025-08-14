import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t py-12 px-4 bg-gradient-to-b from-emerald-50/20 to-card/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image
                  src="/images/bes-logo.png"
                  alt="Bowers Engineering Services Logo"
                  width={40}
                  height={40}
                  className="rounded-xl shadow-lg"
                />
              </div>
              <span className="text-xl font-black">Bowers Engineering</span>
            </div>
            <p className="text-muted-foreground">Professional structural engineering services</p>
          </div>

          {/* Address */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg mb-3">Address</h4>
            <p className="text-muted-foreground leading-relaxed">
              121 Main St.
              <br />
              Auburn, Indiana
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg mb-3">Contact</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <a href="tel:2603330900" className="hover:text-primary transition-colors">
                  (260) 333-0900
                </a>
              </p>
              <p className="text-muted-foreground">
                <a href="mailto:projects@bowerseng.com" className="hover:text-primary transition-colors">
                  projects@bowerseng.com
                </a>
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg mb-3">Business Hours</h4>
            <p className="text-muted-foreground">
              Monday - Friday
              <br />
              9:00 AM - 5:00 PM
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-8 text-center">
          <p className="text-muted-foreground">© 2024 Bowers Engineering Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
