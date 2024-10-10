// import {BrowserRouter as Router, Route}


import Homepage from './pages/HomePage'
import Bookingpage from './pages/BookingPage'
import Coursepage from './pages/CoursePage'
import Mealplanpage from './pages/MealPlanPage'
import Memberdetailpage from './pages/MemberDetailPage'
import Paymentpage from './pages/PaymentPage'
import Bookingpage from './pages/BookingPage'
import Navbar from './components/Navbars/AdminNavbar'

function App() {
  return (
    <div className="App">
     <Switch>
        {/* <Route path={`/auth`} component={AuthLayout} />
      <Route path={`/admin`} component={AdminLayout} />
      <Redirect from={`/`} to='/admin/dashboard' />*/}
        <Route path= '/'><Homepage/></Route>
    </Switch>
    </div>
  );
}

export default App;
