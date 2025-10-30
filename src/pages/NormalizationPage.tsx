import { MethodDetailPage } from '../components/MethodDetailPage'

export function NormalizationPage() {
  return (
    <MethodDetailPage
      title="Normalization / Standardization"
      description="Scale features (e.g., pixel intensities, tabular inputs) to zero mean and unit-variance / bounded ranges (|x| < 1) to stabilize optimization."
      category="preprocessing"
    />
  )
}

