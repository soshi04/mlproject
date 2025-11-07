import { MethodDetailPage } from '../components/MethodDetailPage'
import { MethodTemplateContent } from '../components/MethodTemplateContent'

export function NLPPage() {
  return (
    <MethodDetailPage
      title="NLP on Clinical Notes"
      description="Use per-eye textual diagnoses from ODIR-5K to build a supervised text classifier; optionally fuse with image predictions."
      category="algorithm"
    >
      <MethodTemplateContent
        methodName="NLP on Clinical Notes"
        screenshotHint="Include a screenshot of the notebook cell where you tokenize, vectorize, or fine-tune a language model on the clinical notes."
        overviewContent={
          <p className="text-muted-foreground">
            Describe the clinical questions that textual notes answer and how NLP predictions complement imaging models for
            comprehensive screening.
          </p>
        }
        implementationContent={
          <p className="text-muted-foreground">
            Outline your preprocessing pipeline (tokenization, normalization, vectorization), model selection, training
            hyperparameters, and any multimodal fusion steps.
          </p>
        }
        resultsContent={
          <p className="text-muted-foreground">
            Summarize precision/recall, confusion matrices, or illustrative note snippets that show the classifier’s
            strengths and weaknesses.
          </p>
        }
      />
    </MethodDetailPage>
  )
}

