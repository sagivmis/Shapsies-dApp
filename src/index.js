import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./components/App/App"
import reportWebVitals from "./reportWebVitals"
import "./fonts/BabyDoll/Baby Doll.ttf"

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals()
