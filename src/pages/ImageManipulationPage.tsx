import { MethodDetailPage } from '../components/MethodDetailPage'
import { MethodTemplateContent } from '../components/MethodTemplateContent'

export function ImageManipulationPage() {
  return (
    <MethodDetailPage
      title="Image Manipulation"
      description="Enhance contrast and denoise to highlight vasculature and lesions prior to segmentation/classification (per findings in [1])."
      category="preprocessing"
    >
      <MethodTemplateContent
        methodName="Image Manipulation"
        screenshotHint="Capture the preprocessing pipeline that includes histogram equalization, CLAHE, or other adjustments you applied before feeding images to your models."
        overviewContent={
          <p className="text-muted-foreground">
            Introduce why raw fundus images need enhancement—mention uneven illumination, low contrast vessels, and the
            downstream models that benefit from these manipulations.
          </p>
        }
        implementationContent={
          <p className="text-muted-foreground">
            List each transformation you apply (resize, crop, CLAHE parameters, denoising filter sizes, channel operations)
            and note whether they run offline or on-the-fly in the data loader.
          </p>
        }
        resultsContent={
          <p className="text-muted-foreground">
            Summarize empirical improvements—include before/after contrasts, metric gains, or failure cases where
            manipulation hurt performance.
          </p>
        }
      />
    </MethodDetailPage>
  )
}

