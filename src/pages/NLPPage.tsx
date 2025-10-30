import { MethodDetailPage } from '../components/MethodDetailPage'

export function NLPPage() {
  return (
    <MethodDetailPage
      title="NLP on Clinical Notes"
      description="Use per-eye textual diagnoses from ODIR-5K to build a supervised text classifier; optionally fuse with image predictions."
      category="algorithm"
    />
  )
}

