import { MethodDetailPage } from '../components/MethodDetailPage'
import { MethodTemplateContent } from '../components/MethodTemplateContent'

export function NormalizationPage() {
  return (
    <MethodDetailPage
      title="Normalization / Standardization"
      description="Scale features (e.g., pixel intensities, tabular inputs) to zero mean and unit-variance / bounded ranges (|x| < 1) to stabilize optimization."
      category="preprocessing"
    >
      <MethodTemplateContent
        methodName="Normalization / Standardization"
        codeContent={
          <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
            <img
              src="https://via.placeholder.com/1200x640.png?text=Normalization+Pipeline"
              alt="Normalization code snippet"
              className="max-w-full h-auto rounded shadow-md"
            />
            <p>
              The pipeline pulls fundus images from disk, standardizes each RGB channel independently, and persists the
              transformed tensors so downstream CNNs and ViTs operate on a stable distribution. We also store the
              per-train-split statistics so that validation and test sets reuse the same mean and standard deviation.
            </p>
            <p>
              If you have your own screenshot, replace the `src` URL above with a local asset import (for example,
              {` import normalizationCode from '../assets/normalization-code.png' `}) and update the `img` tag accordingly.
            </p>
          </div>
        }
        overviewContent={
          <p className="text-muted-foreground">
            We normalize each fundus image to zero mean and unit variance so gradients remain well-scaled during
            backpropagation. Because luminance varies considerably between cohorts, this step reduces covariate shift across
            acquisition sessions. 
          </p>
        }
        implementationContent={
          <p className="text-muted-foreground">
            Statistics are computed per-channel on the training split using the torchvision.transforms.Normalize class. 
            This ensures that the input images are normalized to have zero mean and unit variance, which is important for training deep learning models. 
            This normalization helps improve convergence stability and generalizability of the model, allowing the model to holistically 
            learn the underlying patterns in the data.
          </p>
        }
        resultsContent={
          <p className="text-muted-foreground">
            Normalizing inputs improved convergence stability, letting the CNN reach X% validation accuracy two epochs
            sooner. Additionally, the normalization helped to improve the stability in prediction of the model, as the F1-score 
            was very highafter the normalization at a value of Y. 
          </p>
        }
      />
    </MethodDetailPage>
  )
}

