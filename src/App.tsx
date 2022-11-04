import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AppContext } from './context/AppContext'
import { LoadingView } from './views/LoadingView/LoadingView'
import { ScanQRView } from './views/ScanQRView/ScanQRView'

function App() {
  return (
    <AppContext.Provider value={{ appTitle: 'USOS.WEB.APP' }}>
      <Router>
        <Routes>
          <Route path="/scan" element={<ScanQRView title="ScanQRView" />} />
          <Route path="/" element={<LoadingView />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  )
}
export default App
