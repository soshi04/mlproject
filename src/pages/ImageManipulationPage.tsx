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
            To ensure the images are well-conditioned for the downstream models, we apply various random image manipulation techniques to increase the robustness of the model. The image manipulation techniques allow the model to 
            learn the important patterns in the data without overfitting to patterns specific to a particular dataset that would be considered as noise. These manipulation techniques were applied randomly to the training data to 
            maintain the diversity and independence of different images in the dataset.
          </p>
        }
        implementationContent={
          <p className="text-muted-foreground">
            We used the torchvision.transforms.RandomApply class to apply the image manipulation techniques randomly to the training data. The main random image manipulation techniques applied were horizontal and 
            vertical flipping, rotation, shearing, zooming, and color jittering (adjusting brightness, saturation, and contrast). The parameters for some random image manipulation techniques (i.e. brightness, translation) were a set range 
            with the default as the central value to ensure that the image manipulation techniques were applied in a consistent and diverse manner.
          </p>
        }
        resultsContent={
          <p className="text-muted-foreground">
            The image manipulation techniques helped to improve the model's immunities to noise and overfitting to the dataset, as the model was able to generalize better to new images that were not seen during training by identifying 
            the most crucial underlying patterns in the data, corresponding to a high accuracy of X% on the validation set. Additionally, the consistent and randomized manner in which we applied the image manipulation techniques helped 
            to generate consistent results across different training runs, corresponding to a high F1-score of Y on the validation set.
          </p>
        }
      />
    </MethodDetailPage>
  )
}

