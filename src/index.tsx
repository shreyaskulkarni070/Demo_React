import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { JWTProvider as AuthProvider } from "./contexts/auth";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3893EC",
    },
    secondary: {
      main: "#FFFFFF",
    },
    error: {
      main: "#D81A36",
    },
    success: {
      main: "#108608",
    },
  },
  typography: {
    // fontFamily: "Gilroy",
    fontFamily:
      "'-apple-system, BlinkMacSystemFont', Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,sans-serif", // Replace 'Your Font Family' with your desired font
    h6: {
      fontSize: "2rem",
      fontWeight: "bold",
      font: "normal normal bold 16px/21px Gilroy",
      letterSpacing: "0px",
      color: "#4C4C4C",
    },
    h5: {
      fontSize: "2rem",
      fontWeight: "bold",
      font: "normal normal bold 18px/23px Gilroy",
      letterSpacing: "0px",
      color: "#4C4C4C",
    },
    h4: {
      fontSize: "3rem",
      fontWeight: "bold",
      font: "normal normal bold 23px/28px Gilroy",
      letterSpacing: "0px",
      color: "#4C4C4C",
    },
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
      font: "normal normal bold 20px/25px Gilroy",
      letterSpacing: "0px",
      color: "#4C4C4C",
    },
    subtitle1: {
      textAlign: "left",
      font: "normal normal bold 18px/23px Gilroy",
      letterSpacing: "0px",
      color: "#4C4C4C",
      opacity: 1,
      fontWeight: "bold",
    },
    subtitle2: {
      textAlign: "left",
      letterSpacing: "0px",
      color: "#4C4C4C",
      opacity: 1,
      fontSize: "18px",
      // fontFamily: "Gilroy",
      font: "normal normal bold 18px/21px Gilroy",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "normal",
    },
    body1: {
      textAlign: "left",
      font: "normal normal bold 18px/21px Gilroy",
      letterSpacing: "0px",
      color: "#4C4C4CCC",
      opacity: 1,
      wordBreak: "break-word",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          // font: "normal normal bold 20px/24px Gilroy",
          letterSpacing: "0.24px",
          background: "#ffffff 0% 0% no-repeat padding-box",
          borderRadius: "5px",
          color: "#3893EC",
          height: "40px", // Your custom text color for 'contained' variant
          "&:hover": {
            borderColor: "#3893EC", // Custom hover border color for 'outlined' variant
            backgroundColor: "#3893EC", // Custom hover background color for 'contained' variant
            color: "white", // Custom hover text color for 'outlined' variant
          },
        },
        contained: {
          // font: "normal normal bold 20px/24px Gilroy",
          letterSpacing: "0.24px",
          background: "#3893EC 0% 0% no-repeat padding-box",
          borderRadius: "5px",
          color: "white",
          height: "40px", // Your custom text color for 'contained' variant
          "&:hover": {
            backgroundColor: "#3893EC", // Custom hover background color for 'contained' variant
            color: "white", // Custom hover text color for 'contained' variant
          },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    {/* <AuthProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </AuthProvider> */}
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
