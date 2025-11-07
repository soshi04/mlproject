import type { ReactNode } from 'react'
import { Separator } from './ui/separator'

interface MethodTemplateContentProps {
  methodName: string
  screenshotHint?: string
  codeNotes?: string
  overviewPrompt?: string
  implementationPrompt?: string
  resultsPrompt?: string
  codeContent?: ReactNode
  overviewContent?: ReactNode
  implementationContent?: ReactNode
  resultsContent?: ReactNode
}

export function MethodTemplateContent({
  methodName,
  screenshotHint,
  codeNotes,
  overviewPrompt,
  implementationPrompt,
  resultsPrompt,
  codeContent,
  overviewContent,
  implementationContent,
  resultsContent,
}: MethodTemplateContentProps) {
  return (
    <>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Code Implementation</h3>
        <Separator className="mb-4" />
        <div className="bg-muted rounded-lg p-6 border-2 border-dashed border-muted-foreground/20">
          <div className="bg-background rounded border p-8 space-y-6 text-sm text-muted-foreground leading-relaxed">
            {codeContent ?? (
              <>
                <div className="text-center space-y-3">
                  <p>
                    Replace this placeholder with a screenshot or diagram that best illustrates how you implemented
                    {` ${methodName}`}.
                  </p>
                  <p>
                    {screenshotHint ??
                      'Export an image from your notebook or IDE, add it to src/assets (or public/), import it in this page, and drop it into the <img> tag below.'}
                  </p>
                </div>
                <code className="block bg-muted p-3 rounded text-left text-xs">
                  {`<img
  src={yourScreenshot}
  alt="Code implementation for ${methodName}"
  className="max-w-full h-auto rounded shadow-md"
/>`}
                </code>
                <p>
                  {codeNotes ??
                    'Add a short caption that calls out the important steps (e.g., data transforms, model layers, optimizer configuration).'}
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Process & Methodology</h3>
        <Separator className="mb-4" />
        <div className="prose prose-sm max-w-none text-muted-foreground">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg mb-2">Overview</h4>
              {overviewContent ?? (
                <p>
                  {overviewPrompt ??
                    `Summarize why ${methodName} matters for this project. What problem does it solve and how does it connect to your downstream tasks?`}
                </p>
              )}
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Implementation Details</h4>
              {implementationContent ?? (
                <p>
                  {implementationPrompt ??
                    `Document the concrete steps: datasets or features used, preprocessing parameters, model settings, and tooling decisions specific to ${methodName}.`}
                </p>
              )}
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Results & Impact</h4>
              {resultsContent ?? (
                <p>
                  {resultsPrompt ??
                    `Highlight any metrics, qualitative improvements, or lessons learned once ${methodName} was added to the pipeline.`}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


