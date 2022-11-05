import { useReducer } from 'react'
import { reducer, defaultAppContextState } from './context/AppContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AppContext } from './context/AppContext'
import { LoadingView } from './views/LoadingView/LoadingView'
import { MapView } from './views/MapView/MapView'
import { PathView } from './views/PathView/PathView'
import { ScanQRView } from './views/ScanQRView/ScanQRView'
import { SearchPlaceView } from './views/SearchPlaceView/SearchPlaceView'
import PlaceDetailsView from './views/PlaceDetailsView/PlaceDetailsView'

function App() {
  const [state, dispatch] = useReducer(reducer, defaultAppContextState)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Router>
        <Routes>
          <Route path="/" element={<ScanQRView title="ScanQRView" />} />
          <Route path="/Loading" element={<LoadingView />} />
          <Route path="/Map" element={<MapView />} />
          <Route path="/Path" element={<PathView />} />
          <Route path="/Search/:startId" element={<SearchPlaceView />} />
          <Route path="/PlaceDetails" element={<PlaceDetailsView />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  )
}

export default App
