import { MethodDetailPage } from '../components/MethodDetailPage'

export function DimensionalityReductionPage() {
  return (
    <MethodDetailPage
      title="Dimensionality Reduction"
      description="Remove features not pertinent to each task (e.g., select label subsets for classification; reduce text features for NLP)."
      category="preprocessing"
    />
  )
}

