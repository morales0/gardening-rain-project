import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './components';
import { Gardening, Home, Quiz, MyCrops, Rain } from './pages';

function App() {
  const [list, setList] = useState([])
  /* const getCrop = () => {
    fetch("https://openfarm.cc/api/v1/crops/?filter=chard")
      .then((resp) =>{
        console.log(resp)
        return resp.json()
      })
      .then((data) => {
        console.log(data)
      })
  }

  useEffect(() => {
    getCrop()
    return () => {
      console.log("Cleanup")
    }
  }, []) */

	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Navbar />

			<Switch>
        <Route exact path="/">
          <Gardening />
        </Route>
				<Route path="/crops">
					<Gardening />
				</Route>
        <Route path="/rain">
        <Rain />
				</Route>
        <Route path="/user">
					<div>{process.env.PUBLIC_URL}!</div>
				</Route>
        <Route path="/quiz">
					<Quiz />
				</Route>
        <Route path="/mycrops">
          <MyCrops listOfCrp={list}/>
        </Route>
			</Switch>
		</Router>
	);
}

export default App;
