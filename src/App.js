import s from './App.module.css';
import TabsContainer from './components/tabs/TabsContainer';

function App() {
  return (
    <div className={s.App}>
      <header className={s.header}>
КУРС ВАЛЮТ
      </header>
      <div className={s.content}>
        
<TabsContainer/>
      </div>
    </div>
  );
}

export default App;
