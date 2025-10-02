import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Separator } from './components/ui/separator'
import stevenImage from './data/steven.png'
import sohumImage from './data/sohum.png'
import connorImage from './data/Connor_Smith.jpg'
import './App.css'

function App() {
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
            [Your Project Title Here]
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            A comprehensive machine learning approach to [problem domain]
          </p>
          <Button size="lg">
            View Full Proposal
          </Button>
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
                Provide an introduction of your topic and literature review of related work




              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Topic Introduction</h4>
                <p className="text-muted-foreground">
                  [Add your topic introduction here - explain the domain and context of your project]
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Literature Review</h4>
                <p className="text-muted-foreground">
                  [Summarize related work and existing research in this area]
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Dataset Description</h4>
                <p className="text-muted-foreground">
                  [Describe your dataset, its features, size, and characteristics]
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Dataset Link</h4>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.kaggle.com/" target="_blank" rel="noopener noreferrer">
                    Access Dataset
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
              <CardDescription>
                Identify a problem and motivate the need for a solution
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Problem Statement</h4>
                <p className="text-muted-foreground">
                  [Clearly define the specific problem you are trying to solve]
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Motivation</h4>
                <p className="text-muted-foreground">
                  [Explain why this problem is important and worth solving]
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
              <CardDescription>
                Present proposed solutions including data processing methods and ML algorithms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Data Preprocessing Methods</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2">Method 1</h5>
                    <p className="text-sm text-muted-foreground">
                      [e.g., Data cleaning and normalization]
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2">Method 2</h5>
                    <p className="text-sm text-muted-foreground">
                      [e.g., Feature selection/extraction]
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2">Method 3</h5>
                    <p className="text-sm text-muted-foreground">
                      [e.g., Dimensionality reduction]
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Machine Learning Algorithms</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2">Algorithm 1</h5>
                    <p className="text-sm text-muted-foreground">
                      [e.g., Random Forest - sklearn.ensemble.RandomForestClassifier]
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2">Algorithm 2</h5>
                    <p className="text-sm text-muted-foreground">
                      [e.g., SVM - sklearn.svm.SVC]
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2">Algorithm 3</h5>
                    <p className="text-sm text-muted-foreground">
                      [e.g., Neural Networks - sklearn.neural_network.MLPClassifier]
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Learning Approach</h4>
                <p className="text-muted-foreground">
                  [Specify whether you're using supervised, unsupervised, or both approaches and justify your choice]
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
              <CardDescription>
                Identify quantitative metrics and present goals in terms of these metrics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-3">Quantitative Metrics</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg text-center">
                    <h5 className="font-medium mb-2">Metric 1</h5>
                    <p className="text-sm text-muted-foreground">
                      [e.g., Accuracy]
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h5 className="font-medium mb-2">Metric 2</h5>
                    <p className="text-sm text-muted-foreground">
                      [e.g., F1-Score]
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h5 className="font-medium mb-2">Metric 3</h5>
                    <p className="text-sm text-muted-foreground">
                      [e.g., AUC-ROC]
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Project Goals</h4>
                <p className="text-muted-foreground">
                  [Define your project goals including sustainability and ethical considerations]
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Expected Results</h4>
                <p className="text-muted-foreground">
                  [State what results you expect to achieve and why]
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
                <p className="text-sm">
                  [1] Author, A. A., & Author, B. B. (Year). Title of paper. <em>Journal Name</em>, Volume(Issue), pages.
                </p>
                <p className="text-sm">
                  [2] Author, C. C. (Year). Title of paper. In <em>Conference Proceedings</em> (pp. pages). Publisher.
                </p>
                <p className="text-sm">
                  [3] Author, D. D., Author, E. E., & Author, F. F. (Year). Title of paper. <em>Journal Name</em>, Volume(Issue), pages.
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
              <h3 className="font-semibold text-lg mb-2">Steven</h3>
              <p className="text-sm text-muted-foreground">
                Group Leader github test text
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Helped on the project
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
                Computer Vision Specialist
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Created and designed the website and worked on CV model.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-muted-foreground">📷</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">[Team Member 3]</h3>
              <p className="text-sm text-muted-foreground">
                [Role/Specialization]
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                [Brief description of their contribution to the project]
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Second row - 2 members centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-muted-foreground">📷</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">[Team Member 4]</h3>
              <p className="text-sm text-muted-foreground">
                [Role/Specialization]
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                [Brief description of their contribution to the project]
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
                [Role/Specialization] - idea guy
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Helped research final project topic and write proposal, 
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-8 md:mt-16">
        <div className="container mx-auto px-4 md:px-6 py-8 text-center">
          <p className="text-muted-foreground">
            © 2024 ML Project Team. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
