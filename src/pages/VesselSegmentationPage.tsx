import { MethodDetailPage } from '../components/MethodDetailPage'
import { MethodTemplateContent } from '../components/MethodTemplateContent'

export function VesselSegmentationPage() {
  return (
    <MethodDetailPage
      title="Vessel Segmentation (CNN + ViT)"
      description="Hybrid encoder–decoder: ViT encoder for feature extraction and CNN decoder for upsampling to mask outputs; FCN-style pixel predictions [5,6]."
      category="algorithm"
    >
      <MethodTemplateContent
        methodName="Vessel Segmentation"
        screenshotHint="Capture the segmentation architecture diagram or UNet/ViT hybrid code block that shows how you predict vessel masks."
        overviewContent={
          <p className="text-muted-foreground">
            Summarize why vessel segmentation is critical for retinal diagnostics and how this module feeds into the broader
            analysis workflow.
          </p>
        }
        implementationContent={
          <p className="text-muted-foreground">
            Detail the encoder/decoder design, patch extraction strategy, loss functions, and any post-processing steps used
            to clean predicted masks.
          </p>
        }
        resultsContent={
          <p className="text-muted-foreground">
            Capture Dice/IoU scores, qualitative mask overlays, and challenges with thin vessels or noise in specific
            cohorts.
          </p>
        }
      />
    </MethodDetailPage>
  )
}

