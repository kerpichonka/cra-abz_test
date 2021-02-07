import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header'

const list = ["About me", "Relationships", "Requirements", "Users", "Sign Up"];
const mobileList = [
  "About me", 
  "Relationships", 
  "Requirements", 
  "Users", 
  "Sign Up", 
  "How it works",
  "Partnership",
  "Help",
  "Leave testimonial",
  "Contact us",
  "Articles",
  "Our news",
  "Testimonials",
  "Licenses",
  "Privacy Policy",
]

function App() {
  return (
    <div className="App">
      <Header list={list} mobileList={mobileList}/>
    </div>
  );
}

export default App;
