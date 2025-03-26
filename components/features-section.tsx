import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Zap, Globe, Shield, Clock, Share2 } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Our name generator tool offers a range of powerful features to help you find the perfect name.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <Sparkles className="h-6 w-6 mb-2 text-primary" />
              <CardTitle>Multiple Name Types</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Generate personal names, business names, domain names, character names, and fantasy names all in one
                place.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <Zap className="h-6 w-6 mb-2 text-primary" />
              <CardTitle>Instant Generation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Get multiple name suggestions instantly with our lightning-fast name generation algorithm.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <Globe className="h-6 w-6 mb-2 text-primary" />
              <CardTitle>Multilingual Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Generate names from different cultural origins and languages to find the perfect fit.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <Shield className="h-6 w-6 mb-2 text-primary" />
              <CardTitle>Privacy Focused</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Your generated names and preferences are never stored on our servers, ensuring complete privacy.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <Clock className="h-6 w-6 mb-2 text-primary" />
              <CardTitle>Save Favorites</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Save your favorite generated names for later reference, stored securely in your browser.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <Share2 className="h-6 w-6 mb-2 text-primary" />
              <CardTitle>Easy Sharing</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Share your favorite names with friends, colleagues, or clients with a single click.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

