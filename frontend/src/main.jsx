import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";


import "./styles/globals.css";
import "./styles/login.css";
import "./styles/dashboard.css";
import "./styles/sidebar.css";
import "./styles/topbar.css";
import "./styles/cards.css";
import "./styles/tables.css";
import "./styles/forms.css";
import "./styles/modal.css";
import "./styles/responsive.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);