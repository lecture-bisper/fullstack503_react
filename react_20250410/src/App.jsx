import NumberList from './components/NumberList.jsx';
import AttendanceBook from './components/AttendanceBook.jsx';
import NameForm from './components/NameForm.jsx';
import RequestForm from './components/RequestForm.jsx';
import FruitSelect from './components/FruitSelect.jsx';
import Reservation from './components/Reservation.jsx';
import Join from './components/Join.jsx';

function App() {

  return (
    <div className={'container mt-5'}>
      <h3>리스트와 키</h3>
      <NumberList />
      <br />
      <AttendanceBook />

      <br />
      <hr />
      <br />

      <h3>From 사용하기</h3>
      <NameForm />
      <br />
      <br />
      <RequestForm />

      <br />
      <br />

      <FruitSelect />

      <br />
      <br />

      <Reservation />

      <br />
      <br />

      <Join />

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default App;
