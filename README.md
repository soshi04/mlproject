# ML Project Website - Automated Retinal Disease Detection

A comprehensive machine learning project proposal website for **CS 7641/4641** that showcases our approach to automated retinal disease detection from fundus images using deep learning techniques.

## 📋 Project Overview

This project aims to build machine learning models that can:
- **Classify retinal diseases** (normal, diabetes, glaucoma) from fundus images
- **Segment retinal vessels** using advanced deep learning architectures
- **Integrate NLP** with clinical notes for enhanced classification

The website serves as both a project proposal and documentation platform, providing detailed information about our methods, algorithms, and implementation approaches.

## 🎯 Project Goals

- Achieve ≥90% classification accuracy on ODIR-5K dataset
- Achieve a Dice score ≥0.80 on vessel segmentation
- Achieve F1-score ≥0.85 across classes
- Ensure reproducible training and documentable preprocessing
- Address ethical considerations (fairness, data privacy, clinical disclaimers)

## 🛠️ Tech Stack

This project is built with modern web technologies:

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable UI components (Card, Button, Badge, Separator)
- **Radix UI** - Accessible component primitives

## 📁 Project Structure

```
mlproject/
├── src/
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Main landing page
│   │   ├── NormalizationPage.tsx
│   │   ├── ImageManipulationPage.tsx
│   │   ├── DimensionalityReductionPage.tsx
│   │   ├── CNNClassificationPage.tsx
│   │   ├── VesselSegmentationPage.tsx
│   │   └── NLPPage.tsx
│   ├── components/
│   │   ├── MethodDetailPage.tsx  # Reusable template for method pages
│   │   └── ui/              # shadcn/ui components
│   ├── data/               # Image assets (team photos, etc.)
│   ├── lib/                # Utility functions
│   ├── App.tsx             # Main app component with routing
│   └── main.tsx            # Entry point
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mlproject
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint to check code quality

## 🌐 Routing Structure

The application uses React Router for navigation:

- `/` - Home page (main project proposal)
- `/methods/normalization` - Normalization/Standardization method details
- `/methods/image-manipulation` - Image Manipulation method details
- `/methods/dimensionality-reduction` - Dimensionality Reduction method details
- `/methods/cnn-classification` - CNN Multi-Class Classification details
- `/methods/vessel-segmentation` - Vessel Segmentation (CNN + ViT) details
- `/methods/nlp` - NLP on Clinical Notes details

## 📚 Website Sections

### 1. Introduction & Background
- Topic introduction and motivation
- Literature review of related work
- Dataset descriptions (ODIR-5K and Fundus Vessel Segmentation)
- Links to datasets

### 2. Problem Definition
- Problem statement
- Motivation for automated screening systems

### 3. Methods (Clickable Cards)
The methods section contains **6 clickable cards** that navigate to detailed pages:

#### Data Preprocessing Methods:
- **Normalization/Standardization** - Scaling features to zero mean and unit variance
- **Image Manipulation** - Contrast enhancement and denoising
- **Dimensionality Reduction** - Feature selection and reduction

#### Machine Learning Algorithms:
- **CNN Multi-Class Classification** - Disease classification using CNN architectures
- **Vessel Segmentation (CNN + ViT)** - Hybrid encoder-decoder for vessel segmentation
- **NLP on Clinical Notes** - Text classification on clinical notes

Each method page includes:
- Code implementation section (for screenshots)
- Process & Methodology section with:
  - Overview
  - Implementation Details
  - Results & Impact

### 4. Results & Discussion
- Quantitative metrics (Accuracy, Dice Score, F1-Score)
- Project goals
- Expected results

### 5. References
- IEEE-formatted citations for all referenced papers

### 6. Team Members
- Profiles of all 5 team members with photos and roles

## ✏️ Adding Content to Method Pages

To add your code screenshots and process descriptions:

1. **Navigate to the specific method page file** in `src/pages/`:
   - `NormalizationPage.tsx`
   - `ImageManipulationPage.tsx`
   - etc.

2. **Add a code screenshot:**
   - Place your screenshot in the `public/` directory (e.g., `public/normalization-code.png`)
   - In the method page file, find the "Code Implementation" section
   - Replace the placeholder with:
   ```tsx
   <img 
     src="/normalization-code.png" 
     alt="Code implementation for Normalization"
     className="max-w-full h-auto rounded shadow-md"
   />
   ```

3. **Add process descriptions:**
   - Each page uses the `MethodDetailPage` template component
   - To customize content, you can:
     - Modify the template in `src/components/MethodDetailPage.tsx`, or
     - Create custom page components that override specific sections

4. **Example - Editing NormalizationPage.tsx:**
```tsx
// You can pass custom content or modify MethodDetailPage to accept more props
// For now, edit the template directly or create wrapper components
```

## 🎨 UI Components

The project uses shadcn/ui components for a consistent, modern design:
- **Card** - Content containers
- **Button** - Interactive buttons with variants
- **Badge** - Status indicators
- **Separator** - Visual dividers

All components are located in `src/components/ui/` and are built with Radix UI primitives and Tailwind CSS.

## 👥 Team Members

1. **Steven Murley** - Project Manager
2. **Sohum Joshi** - Infrastructure and Technical Lead
3. **Adam Bakr** - Data Analyst & Research Specialist
4. **Yuhan Wei** - Research & Evaluation Specialist
5. **Connor Smith** - Research Writer & Documentation Lead

## 📊 Datasets

- **ODIR-5K**: ~5,000 fundus scans with rich labels and clinical notes
  - [Kaggle Dataset](https://www.kaggle.com/datasets/andrewmvd/ocular-disease-recognition-odir5k)

- **Fundus Vessel Segmentation**: ~800 samples with ground-truth vessel masks
  - [Kaggle Dataset](https://www.kaggle.com/datasets/nikitamanaenkov/fundus-image-dataset-for-vessel-segmentation)

## 🔧 Development

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Tailwind CSS for styling
- Functional React components with hooks

### Build & Deploy

1. Build for production:
```bash
npm run build
```

2. Preview the production build:
```bash
npm run preview
```

The build output will be in the `dist/` directory, ready to be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## 📝 Notes

- All method cards on the home page are clickable and will navigate to their respective detail pages
- The website is fully responsive and works on mobile, tablet, and desktop devices
- All images are optimized during the build process

## 🤝 Contributing

This is a course project repository. For any issues or improvements, please contact the team members.

## 📄 License

This project is created for academic purposes as part of CS 7641/4641 coursework.

---

**Course**: CS 7641/4641 - Machine Learning  
**Project**: Automated Retinal Disease Detection from Fundus Images  
**Year**: 2025
