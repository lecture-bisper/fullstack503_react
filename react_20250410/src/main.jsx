import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Ex2 from './components/Ex/Ex2.jsx';
import Ex3 from './components/Ex/Ex3.jsx';

// 문제 2) https://www.w3schools.com/w3css/tryw3css_examples_album_text.htm 사이트를 리액트로 만들어보시오

// 문제 3) https://www.w3schools.com/w3css/tryw3css_examples_pricing_tables.htm 사이트를 리액트로 구현하시오

// 문제 4) https://www.w3schools.com/w3css/tryw3css_templates_food_blog.htm 사이트를 리액트로 구현하시오

// 문제 5) https://www.w3schools.com/w3css/tryw3css_templates_pizza.htm 사이트를 리액트로 구현하시오

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
    {/*<Ex2 />*/}
    <Ex3 />
  </StrictMode>,
)
