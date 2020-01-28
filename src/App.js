// Package import(s)
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Component import(s)
import Footer from './components/footer/footer.component'
import Header from './components/header/header.component'
import HomePage from './pages/home/home.page'
import MobileHeader from './components/mobile-header/mobile-header.component'

// Style import(s)
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MobileHeader />

      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
