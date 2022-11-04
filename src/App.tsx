import { useReducer } from 'react'
import { reducer, defaultAppContextState } from './context/AppContext'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { AppContext } from './context/AppContext'
import { LoadingView } from './views/LoadingView/LoadingView'
import { MapView } from './views/MapView/MapView'
import { ScanQRView } from './views/ScanQRView/ScanQRView'
import { SearchPlaceView } from './views/SearchPlaceView/SearchPlaceView';

function App() {
  const [state, dispatch] = useReducer(reducer, defaultAppContextState);
  return (
    <AppContext.Provider value={{state, dispatch}} >
        <Router>
          <Routes>
            <Route path="/" element={<ScanQRView title="ScanQRView"/>} />
            <Route path="/Loading" element={<LoadingView />} />
            <Route path="/Map" element={<MapView />} />
            <Route path="/Search" element={<SearchPlaceView />} />
          </Routes>
        </Router> 
      </AppContext.Provider>
    )
}

export default App

