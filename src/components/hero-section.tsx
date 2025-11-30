import { Zap } from "lucide-react"

export default function Hero() {
  return (

    // This is a placeholder for the hero section
    // Start building your app with RavenKit Here

    <div className="container py-12">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">
          Welcome to RavenKit <Zap className="inline-block w-8 h-8 text-primary" />
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Start building your amazing application with our powerful toolkit
        </p>

      </div>
    </div>
  )
}