import { MethodDetailPage } from '../components/MethodDetailPage'
import { MethodTemplateContent } from '../components/MethodTemplateContent'

export function CNNClassificationPage() {
  return (
    <MethodDetailPage
      title="CNN Multi-Class Classification"
      description="Design a CNN to predict disease class (normal / diabetes / glaucoma) from fundus images, building on architectures like VGG/ResNet [3,4]."
      category="algorithm"
    >
      <MethodTemplateContent
        methodName="CNN Multi-Class Classification"
        screenshotHint="Paste a screenshot of your CNN model definition or training loop—include the optimizer and loss setup."
        overviewContent={
          <p className="text-muted-foreground">
            Describe why a CNN backbone is appropriate for fundus disease classification and how it fits alongside other
            models in your pipeline.
          </p>
        }
        implementationContent={
          <p className="text-muted-foreground">
            Break down the architecture (input size, convolution stacks, residual blocks), training regimen, augmentation,
            and hardware setup so teammates can reproduce results.
          </p>
        }
        resultsContent={
          <p className="text-muted-foreground">
            Summarize key metrics (accuracy, F1, ROC curves) and highlight any class-specific insights or error patterns you
            observed.
          </p>
        }
      />
    </MethodDetailPage>
  )
}

