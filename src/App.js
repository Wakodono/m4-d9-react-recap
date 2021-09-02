import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import WarningSign from './components/WarningSign'
// import MyBadge from './components/MyBadge'
// import SingleBook from './components/SingleBook'
import BookList from './components/BookList'
import fantasyBooks from './fantasyBooks.json'
import MyNavbar from './components/MyNavbar'
import Registration from './components/Registration'

function App() {
  return (
    <Router>
      <div className="App">
          <MyNavbar />
          <header className="App-header">
            {/* <WarningSign text="Watch out again!" /> */}
            {/* <MyBadge text="NEW!!" color="info" /> */}
            {/* <SingleBook book={fantasyBooks[0]} /> */}
            <Route path="/" exact render={() => <BookList books={fantasyBooks} />} />
            <Route path="/Registration" exact component={Registration} />
          </header>
      </div>
    </Router>
  )
}

export default App
