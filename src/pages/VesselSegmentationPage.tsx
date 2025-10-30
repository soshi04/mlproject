import { MethodDetailPage } from '../components/MethodDetailPage'

export function VesselSegmentationPage() {
  return (
    <MethodDetailPage
      title="Vessel Segmentation (CNN + ViT)"
      description="Hybrid encoder–decoder: ViT encoder for feature extraction and CNN decoder for upsampling to mask outputs; FCN-style pixel predictions [5,6]."
      category="algorithm"
    />
  )
}

