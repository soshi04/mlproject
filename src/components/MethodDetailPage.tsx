import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Separator } from './ui/separator'

interface MethodDetailPageProps {
  title: string
  description: string
  category: 'preprocessing' | 'algorithm'
}

export function MethodDetailPage({ title, description, category }: MethodDetailPageProps) {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-0 md:border-b">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">ML Project Proposal</h1>
            <Button variant="outline" onClick={() => navigate('/')}>
              ← Back to Home
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-4 md:px-6 py-8 md:py-12">
        <div className="mb-8">
          <Button variant="outline" onClick={() => navigate('/')} className="mb-4">
            ← Back to Methods
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">{title}</CardTitle>
            <p className="text-muted-foreground mt-2">{description}</p>
            <span className="inline-block mt-2">
              <span className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground">
                {category === 'preprocessing' ? 'Data Preprocessing' : 'ML Algorithm'}
              </span>
            </span>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Code Screenshot Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Code Implementation</h3>
              <Separator className="mb-4" />
              <div className="bg-muted rounded-lg p-6 border-2 border-dashed border-muted-foreground/20">
                <div className="bg-background rounded border p-8">
                  {/* Placeholder for code screenshot */}
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    [Code Screenshot Placeholder - Add your screenshot here]
                  </p>
                  <div className="text-xs text-muted-foreground text-center space-y-1">
                    <p>To add a screenshot, replace this placeholder with an img tag:</p>
                    <code className="block bg-muted p-2 rounded text-left mt-2">
                      {`<img 
  src="/path/to/code-screenshot.png" 
  alt="Code implementation for ${title}"
  className="max-w-full h-auto rounded shadow-md"
/>`}
                    </code>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Description Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Process & Methodology</h3>
              <Separator className="mb-4" />
              <div className="prose prose-sm max-w-none">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Overview</h4>
                    <p className="text-muted-foreground">
                      [Describe the overall approach and rationale for this method]
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Implementation Details</h4>
                    <p className="text-muted-foreground">
                      [Describe the specific steps, parameters, and technical details of the implementation]
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Results & Impact</h4>
                    <p className="text-muted-foreground">
                      [Describe how this method contributed to the overall project, any metrics or improvements observed]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

