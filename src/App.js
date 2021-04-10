import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './components';
import { Gardening, Home, MyCrops } from './pages';

function App() {

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
		<Router>
			<Navbar />

			<Switch>
        <Route exact path="/">
          <Home />
        </Route>
				<Route path="/gardening">
					<Gardening />
				</Route>
        <Route path="/rain">
					<div>Rain!</div>
				</Route>
        <Route path="/user">
					<div>User!</div>
				</Route>
        <Route path="/mycrops">
          <MyCrops />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
