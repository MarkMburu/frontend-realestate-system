import './App.css';
import { makeStyles,ThemeProvider,createMuiTheme } from '@material-ui/core';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Accounting from "./components/pages/Accounting/Accounting";
import Registration from "./components/pages/Registration/Registration";
import Staff from "./components/pages/Staff/Staff";
import Sales from "./components/pages/Sales/Sales";
import Projects from "./components/pages/Projects/Projects";
import CustomerStatement from "./components/pages/CustomerStatements/CustomerStatements";
import AgentsProfile from "./components/pages/AgentsProfile/AgentsProfile";
import Reports from "./components/pages/Reports/Reports";
import Transactions from "./components/pages/Transactions/Transactions";
import PermanentDrawerLeft from "./components/Drawer";

const useStyles = makeStyles(theme =>({
  container:{
    display:"flex"
  },
  content: {
    width:"100%",
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(5),
    margin:theme.spacing(4)
  },
}))

const theme = createMuiTheme({
  palette:{
    primary:{
      main:"#333996",
      light:"#3c44b126"
    },
    secondary:{
      main:"#f83245",
      light:"#f8324526"
    },
    background:{
      default: "#f4f5fd"
    },
    shape:{
      borderRadius: '12px'
    }
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:"translateZ(0)"
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})

function App() {
  const classess = useStyles();
  return (
    <>
    <ThemeProvider theme={theme}>
    <Router>
    <PermanentDrawerLeft/>
      <Switch>
        <div className={classess.container}>
      <Route path="/" component={Dashboard}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route  path="/register" component={Registration}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/sales" component={Sales}/>
        <Route path="/accounts" component={Accounting}/>
        <Route path="/customer" component={CustomerStatement}/>
        <Route path="/agents" component={ AgentsProfile}/>
        <Route path="/staff" component={ Staff}/>
        <Route path="/reports" component={ Reports}/>
        <Route path="/transactions" component={ Transactions}/>
        </div>
        </Switch>
    </Router>
    </ThemeProvider>
    
    </>
  );
}

export default App;
