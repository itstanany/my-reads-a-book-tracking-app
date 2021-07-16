import { Route, Switch } from 'react-router-dom';
import Footer from './Components/FooterComponent';
import Header from './Components/HeaderComponent';
import Home from './Components/HomeComponent';
import Search from './Components/SearchComponent';

const Page = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
      </Switch>
      <Footer />
    </>
  )
}

export default Page;
