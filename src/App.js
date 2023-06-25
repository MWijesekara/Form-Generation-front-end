import { BrowserRouter as Router,Routes,Route,} from 'react-router-dom';
import  Home from './Component/Question_Home';
import Forms from './Component/Question_Forms';
import Question_View_Final from './Component/Question_View_FInal';
import QuestionUi from './Component/Test';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/Forms" element={<Forms/>}/>
        <Route exact path="/Home" element={<Home/>}/>
        <Route exact path="/view" element={<Question_View_Final/>}/>
        
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
