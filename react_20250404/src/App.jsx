import ConfirmDialog from "./components/ConfirmDialog.jsx";
import Car from "./components/Car.jsx";
import Compo from "./components/Compo.jsx";
import CommentList from "./components/CommentList.jsx";
import BootstrapCDN from "./components/BootstrapCDN.jsx";
import BootstrapReact from "./components/BootstrapReact.jsx";

function App() {

  return (
    <div>
      <ConfirmDialog />
      <hr />
      <Car />
      <hr />
      <Compo />

      <br />
      <hr/>
      <br/>

      <CommentList />

      <br/>
      <hr/>
      <br/>

      <BootstrapCDN />
      <BootstrapReact />

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default App
