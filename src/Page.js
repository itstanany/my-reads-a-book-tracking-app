import { Route, Switch } from 'react-router-dom';
import Home from './Components/HomeComponent';
import Search from './Components/SearchComponent';

const Page = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
    </Switch>
  )
}

export default Page;
