import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppContext } from './context/AppContext'
import { LoadingView } from './views/LoadingView/LoadingView'
import { ScanQRView } from './views/ScanQRView/ScanQRView'


function App() {

return (
   <AppContext.Provider value= {{title: 'USOS.WEB.APP'}}>
      <Router>
        <Route path="/" element={<ScanQRView title="ScanQRView"/>} />
        <Route path="/" element={<LoadingView />} />
      </Router> 
    </AppContext.Provider>
  )
}
export default App