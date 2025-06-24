import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/assets/sass/style.scss'
// import '../src/assets/sass/elements/_about.scss'
// import '../src/assets/sass/elements/_blog.scss'
// import '../src/assets/sass/elements/_contact.scss'
// import '../src/assets/sass/elements/_footer.scss'
// import '../src/assets/sass/elements/_header.scss'
// import '../src/assets/sass/elements/_home.scss'
// import '../src/assets/sass/elements/_portfolio.scss'
// import '../src/assets/sass/elements/_resume.scss'
// import '../src/assets/sass/elements/_services.scss'
// import '../src/assets/sass/elements/_skills.scss'
// import '../src/assets/sass/elements/_testimonials.scss'
// import '../src/assets/sass/elements/_typography.scss'
// import '../src/assets/sass/elements/_variables.scss'
// import '../src/assets/sass/elements/_work.scss'
// import '../src/assets/sass/elements/_work.scss'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />

  </StrictMode>,
)
