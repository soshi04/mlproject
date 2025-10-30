import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Separator } from '../components/ui/separator'
import stevenImage from '../data/steven.png'
import sohumImage from '../data/sohum.png'
import connorImage from '../data/Connor_Smith.jpg'
import adamImage from '../data/adam.jpg'
import yuhanImage from '../data/yuhan.jpg'

export function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
      <header className="border-0 md:border-b">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">ML Project Proposal</h1>
            <Badge variant="outline">CS 7641/4641</Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">
            Automated Retinal Disease Detection from Fundus Images
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
          A comprehensive machine learning approach to early screening and segmentation of retinal disease
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-4 md:px-6 py-8 md:py-12">
        <div className="grid gap-8">
          
          {/* Introduction/Background Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex flex-wrap items-center gap-2">
                Introduction & Background
                <Badge variant="secondary">✓ Literature Review</Badge>
                <Badge variant="secondary">✓ Dataset Description</Badge>
                <Badge variant="secondary">✓ Dataset Link</Badge>
              </CardTitle>
              <CardDescription>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Topic Introduction</h4>
                <p className="text-muted-foreground">
                Eye diseases are among the leading causes of vision loss and blindness. Early detection and prevention are crucial for preserving vision. Leveraging machine learning to analyze large volumes of retinal (fundus) images can accelerate diagnosis and support timely treatment for millions worldwide by scaling specialist expertise.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Literature Review</h4>
                <p className="text-muted-foreground">
                Segmentation of retinal vessels using preprocessing to boost contrast and reduce noise combined with CNN-based models achieves &gt;90% accuracy across multiple datasets [1]. Broader deep learning reviews note that many diseases of the eye, brain, and cardiovascular system manifest in the retina, motivating automated analysis pipelines [2]. For classification/segmentation backbones, standard CNNs learn hierarchical features; VGGNet deepens with small kernels [3], ResNet mitigates vanishing gradients via residual blocks [4], and FCNs enable pixel-wise predictions for segmentation [5]. Vision Transformers (ViT) model images as patch sequences, they typically require more data to outperform strong CNNs on benchmarks [6].
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Dataset Description</h4>
                <p className="text-muted-foreground">
                <span className="font-medium">Dataset 1 — ODIR-5K:</span> ~5,000 fundus scans with rich labels (e.g., normal, diabetes, glaucoma) and per-eye textual clinical notes. Useful for multi-class disease classification and optional text–image experiments. <br />
                  <span className="font-medium">Dataset 2 — Fundus Vessel Segmentation:</span> ~800 samples (600 train / 200 test) with ground-truth vessel masks for segmentation tasks; includes descriptors similar to normal/diabetes/glaucoma. Ideal for evaluating vessel segmentation methods and Dice score.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Dataset Link</h4>
                <Button variant="outline" size="sm" asChild>
                    <a href="https://www.kaggle.com/datasets/andrewmvd/ocular-disease-recognition-odir5k" target="_blank" rel="noopener noreferrer">
                      Access ODIR-5K
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.kaggle.com/datasets/nikitamanaenkov/fundus-image-dataset-for-vessel-segmentation" target="_blank" rel="noopener noreferrer">
                      Access Vessel Segmentation
                    </a>
                  </Button>
              </div>
            </CardContent>
          </Card>

          {/* Problem Definition Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex flex-wrap items-center gap-2">
                Problem Definition
                <Badge variant="secondary">✓ Problem</Badge>
                <Badge variant="secondary">✓ Motivation</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Problem Statement</h4>
                <p className="text-muted-foreground">
                Approximately 40 million people worldwide are blind, and 50–80% of cases are preventable if detected early. Conditions like diabetic retinopathy silently damage the retina before symptoms arise, while limited specialist availability creates long wait times for screening. We aim to build models that classify retinal disease from fundus images and segment retinal vessels to support early detection at scale.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Motivation</h4>
                <p className="text-muted-foreground">
                An automated screening system can expand capacity, shorten diagnostic delays, and extend specialist expertise to vulnerable populations. Rapid analysis of fundus images could preserve sight for at-risk groups—including veterans with elevated diabetes risk and constrained access to care—by triaging cases and prioritizing follow-up.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Methods Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex flex-wrap items-center gap-2">
                Methods
                <Badge variant="secondary">✓ 3+ Data Preprocessing</Badge>
                <Badge variant="secondary">✓ 3+ ML Algorithms</Badge>
                <Badge variant="secondary">✓ Learning Methods</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Data Preprocessing Methods</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div 
                    className="p-4 border rounded-lg cursor-pointer hover:bg-accent transition-colors"
                    onClick={() => navigate('/methods/normalization')}
                  >
                    <h5 className="font-medium mb-2">Method 1: Normalization / Standardization</h5>
                    <p className="text-sm text-muted-foreground">
                    Scale features (e.g., pixel intensities, tabular inputs) to zero mean and unit-variance / bounded ranges (|x| &lt; 1) to stabilize optimization.
                    </p>
                  </div>
                  <div 
                    className="p-4 border rounded-lg cursor-pointer hover:bg-accent transition-colors"
                    onClick={() => navigate('/methods/image-manipulation')}
                  >
                    <h5 className="font-medium mb-2">Method 2: Image Manipulation</h5>
                    <p className="text-sm text-muted-foreground">
                    Enhance contrast and denoise to highlight vasculature and lesions prior to segmentation/classification (per findings in [1]).
                    </p>
                  </div>
                  <div 
                    className="p-4 border rounded-lg cursor-pointer hover:bg-accent hover:shadow-md transition-all"
                    onClick={() => navigate('/methods/dimensionality-reduction')}
                  >
                    <h5 className="font-medium mb-2">Method 3: Dimensionality Reduction</h5>
                    <p className="text-sm text-muted-foreground">
                    Remove features not pertinent to each task (e.g., select label subsets for classification; reduce text features for NLP).
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Machine Learning Algorithms</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div 
                    className="p-4 border rounded-lg cursor-pointer hover:bg-accent hover:shadow-md transition-all"
                    onClick={() => navigate('/methods/cnn-classification')}
                  >
                    <h5 className="font-medium mb-2">Algorithm 1: CNN Multi-Class Classification</h5>
                    <p className="text-sm text-muted-foreground">
                    Design a CNN to predict disease class (normal / diabetes / glaucoma) from fundus images, building on architectures like VGG/ResNet [3,4].
                    </p>
                  </div>
                  <div 
                    className="p-4 border rounded-lg cursor-pointer hover:bg-accent hover:shadow-md transition-all"
                    onClick={() => navigate('/methods/vessel-segmentation')}
                  >
                    <h5 className="font-medium mb-2">Algorithm 2: Vessel Segmentation (CNN + ViT)</h5>
                    <p className="text-sm text-muted-foreground">
                    Hybrid encoder–decoder: ViT encoder for feature extraction and CNN decoder for upsampling to mask outputs; FCN-style pixel predictions [5,6].
                    </p>
                  </div>
                  <div 
                    className="p-4 border rounded-lg cursor-pointer hover:bg-accent hover:shadow-md transition-all"
                    onClick={() => navigate('/methods/nlp')}
                  >
                    <h5 className="font-medium mb-2">Algorithm 3: NLP on Clinical Notes</h5>
                    <p className="text-sm text-muted-foreground">
                    Use per-eye textual diagnoses from ODIR-5K to build a supervised text classifier; optionally fuse with image predictions.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Learning Approach</h4>
                <p className="text-muted-foreground">
                Primarily supervised learning: (1) multi-class image classification on ODIR-5K, (2) supervised semantic segmentation on the vessel dataset with ground-truth masks, and (3) supervised text classification on clinical notes. This choice aligns with labeled datasets and facilitates clear, clinical metrics (accuracy, F1, Dice).
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Results and Discussion Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex flex-wrap items-center gap-2">
                (Potential) Results & Discussion
                <Badge variant="secondary">✓ 3+ Metrics</Badge>
                <Badge variant="secondary">✓ Goals</Badge>
                <Badge variant="secondary">✓ Expected Results</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-3">Quantitative Metrics</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg text-center">
                    <h5 className="font-medium mb-2">Metric 1: Accuracy</h5>
                    <p className="text-sm text-muted-foreground">
                    Percent of images correctly classified by the CNN.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h5 className="font-medium mb-2">Metric 2: Dice Score</h5>
                    <p className="text-sm text-muted-foreground">
                    Overlap between predicted and ground-truth vessel masks for segmentation.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h5 className="font-medium mb-2">Metric 3: F1-Score</h5>
                    <p className="text-sm text-muted-foreground">
                    Harmonic mean of precision and recall for classification.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Project Goals</h4>
                <p className="text-muted-foreground">
                Achieve ≥90% classification accuracy on ODIR-5K, a Dice score ≥0.80 on vessel segmentation, and F1-score ≥0.85 across classes. Ensure reproducible training, documentable preprocessing, and ethical considerations (fairness across demographics, data privacy, and appropriate clinical disclaimers).
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Expected Results</h4>
                <p className="text-muted-foreground">
                Based on prior work, we expect contrast-enhanced preprocessing plus CNN backbones to yield strong classification, and a ViT-encoder/CNN-decoder to produce competitive vessel masks on the segmentation dataset. Incorporating textual clinical notes may further improve class separability for ambiguous cases.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* References Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex flex-wrap items-center gap-2">
                References
                <Badge variant="secondary">✓ 3+ References</Badge>
                <Badge variant="secondary">✓ In-Text Citations</Badge>
              </CardTitle>
              <CardDescription>
                Cite relevant papers and articles utilizing the IEEE format
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
              <p>
                  [1] U. Bhimavarapu, "Retina Blood Vessels Segmentation and Classification with the Multi-featured Approach," <em>J. Imaging Inform. Med.</em>, vol. 38, no. 1, pp. 520–533, Aug. 2024.
                </p>
                <p>
                  [2] S. Muchuchuti and S. Viriri, "Retinal Disease Detection Using Deep Learning Techniques: A Comprehensive Review," <em>J. Imaging</em>, vol. 9, no. 4, Apr. 2023.
                </p>
                <p>
                  [3] K. Simonyan and A. Zisserman, "Very Deep Convolutional Networks for Large-Scale Image Recognition," <em>arXiv</em>:1409.1556, 2014.
                </p>
                <p>
                  [4] K. He, X. Zhang, S. Ren, and J. Sun, "Deep Residual Learning for Image Recognition," in <em>CVPR</em>, 2016, pp. 770–778.
                </p>
                <p>
                  [5] J. Long, E. Shelhamer, and T. Darrell, "Fully Convolutional Networks for Semantic Segmentation," in <em>CVPR</em>, 2015, pp. 3431–3440.
                </p>
                <p>
                  [6] A. Dosovitskiy <em>et al.</em>, "An Image is Worth 16×16 Words: Transformers for Image Recognition at Scale," <em>arXiv</em>:2010.11929, 2020.
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </main>

      <Separator className="my-12" />

      {/* Team Members Section */}
      <section className="container mx-auto max-w-6xl px-4 md:px-6 py-8 md:py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-muted-foreground">
            Meet the team members working on this project
          </p>
        </div>
        
        {/* First row - 3 members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src={stevenImage} 
                  alt="Steven" 
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center 10%' }}
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">Steven Murley</h3>
              <p className="text-sm text-muted-foreground">
                Project Manager
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Organized the GitHub repository, created the Gantt chart, contributed on website, and defined the problem statement. Also played a leading role in coordinating and delivering the final presentation.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
              <img 
                  src={sohumImage} 
                  alt="Sohum" 
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">Sohum Joshi</h3>
              <p className="text-sm text-muted-foreground">
                Infrastructure and Technical Lead
              </p>
              <p className="text-xs text-muted-foreground mt-2">
              Authored and refined the methods section, described the dataset in detail, managed GitHub contributions, developed the proposal website, and presented technical details during the presentation.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
              <img 
                  src={adamImage} 
                  alt="Adam" 
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center 10%' }}
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">Adam Bakr</h3>
              <p className="text-sm text-muted-foreground">
              Data Analyst & Research Specialist
              </p>
              <p className="text-xs text-muted-foreground mt-2">
              Led the development of evaluation metrics, conducted a comprehensive literature review, researched preprocessing methods, and contributed significantly to the team's presentation.
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Second row - 2 members centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
              <img 
                  src={yuhanImage} 
                  alt="Yuhan" 
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center 10%' }}
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">Yuhan Wei</h3>
              <p className="text-sm text-muted-foreground">
              Research & Evaluation Specialist
              </p>
              <p className="text-xs text-muted-foreground mt-2">
              Worked on developing methods and metrics, conducted literature review research, and presented results as part of the final team presentation.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src={connorImage} 
                  alt="Steven" 
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center 10%' }}
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">Connor Smith</h3>
              <p className="text-sm text-muted-foreground">
              Research Writer & Documentation Lead
              </p>
              <p className="text-xs text-muted-foreground mt-2">
              Wrote the introduction, conducted literature review research, contributed to the methods section, presented key findings, and compiled the project's references.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-8 md:mt-16">
        <div className="container mx-auto px-4 md:px-6 py-8 text-center">
          <p className="text-muted-foreground">
            © 2025 ML Project Team. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

