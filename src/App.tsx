import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { NormalizationPage } from './pages/NormalizationPage'
import { ImageManipulationPage } from './pages/ImageManipulationPage'
import { DimensionalityReductionPage } from './pages/DimensionalityReductionPage'
import { CNNClassificationPage } from './pages/CNNClassificationPage'
import { VesselSegmentationPage } from './pages/VesselSegmentationPage'
import { NLPPage } from './pages/NLPPage'
import './App.css'

function App() {
  return (
    <BrowserRouter basename="/mlproject">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/methods/normalization" element={<NormalizationPage />} />
        <Route path="/methods/image-manipulation" element={<ImageManipulationPage />} />
        <Route path="/methods/dimensionality-reduction" element={<DimensionalityReductionPage />} />
        <Route path="/methods/cnn-classification" element={<CNNClassificationPage />} />
        <Route path="/methods/vessel-segmentation" element={<VesselSegmentationPage />} />
        <Route path="/methods/nlp" element={<NLPPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
