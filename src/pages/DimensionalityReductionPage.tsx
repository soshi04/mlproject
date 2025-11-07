import { MethodDetailPage } from '../components/MethodDetailPage'
import { MethodTemplateContent } from '../components/MethodTemplateContent'

export function DimensionalityReductionPage() {
  return (
    <MethodDetailPage
      title="Dimensionality Reduction"
      description="Remove features not pertinent to each task (e.g., select label subsets for classification; reduce text features for NLP)."
      category="preprocessing"
    >
      <MethodTemplateContent
        methodName="Dimensionality Reduction"
        screenshotHint="Show the code or notebook cell where you run PCA, t-SNE, UMAP, or feature selection on the retinal datasets."
        overviewContent={
          <p className="text-muted-foreground">
            Explain how reducing feature space combats the curse of dimensionality for retinal data and why it helps both
            classical models and deep networks converge faster.
          </p>
        }
        implementationContent={
          <p className="text-muted-foreground">
            Document which reduction technique you chose, how you normalized inputs beforehand, the number of components you
            kept, and how you persisted the fitted transform for later use.
          </p>
        }
        resultsContent={
          <p className="text-muted-foreground">
            Note any variance explained, separation visible in 2D plots, or improvements in accuracy/F1 after using the
            reduced representation.
          </p>
        }
      />
    </MethodDetailPage>
  )
}

