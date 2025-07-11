import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import bgd from './bg-desktop-dark.jpg';
import bgl from './bg-desktop-light.jpg';
// import bgmdark from './bg-mobile-dark.jpg';
// import bgmlight from './bg-mobile-light.jpg';
import modea from './icon-sun.svg';
import modeb from './icon-moon.svg';
import nodea from './icon-check.svg'
import nodeb from './icon-cross.svg'
import './App.css';
import './media.css';
import './media2.css';
function App() {
  const isMobile = useMediaQuery({maxWidth: 600});
  const [Mode, setMode] = useState('App');
  const [bgImMode, setBgImMode] = useState(bgd);
  const [toggle, setToggle] = useState(modea);
  const [inputM, setInputM] = useState('inputbox');
  const [radioM, setRadioM] = useState('inputrad');
  const [Check, setCheck] = useState('objectrad');
  const [rCheck, setRcheck] = useState('objectcheck');
  const [objectM, setObjectM] = useState('object');
  const [strikeOut, setStrikeOut] = useState('')
  const [isRemUse, setRemUse] = useState('objectremNuse');
  const [modeR, setmodeR] = useState('');
  const [fin, setfin] = useState('fin');
  const [fina, setfina] = useState('fina');
  const [finb, setfinb] = useState('finb');
  const [finc, setfinc] = useState('finc');
  const [find, setfind] = useState('find');
  const [fincont, setfincont] = useState('fincont');
  const [indieM, setindieM] = useState('indieitems');
  const [blue, setallblue] = useState('all_blue')
  const [ablue, setactiveblue] = useState('')
  const [cblue, setcompblue] = useState('')
  const [stuff1, setstuff1] = useState('stuff1')
  const [stuff2, setstuff2] = useState('stuff2')
  

  // adding functionality
  const [tasks, setTasks] = useState([
  // { id: crypto.randomUUID(), text: 'Just enter the task and press ENTER', completed: false },
  // { id: crypto.randomUUID(), text: 'Task 2', completed: false },
]);

const [filter, setFilter] = useState('all'); // 'all', 'completed', or 'active'


const totalTasks = tasks.length;
// const completedCount = tasks.filter(task => task.completed).length;
// const activeCount = tasks.filter(task => !task.completed).length;

  const toggleMode = (e) => {
    e.preventDefault();
    // console.log('toggleMode called');
    // light mode
    if (Mode === 'App') {
      setMode('Applight');
      setBgImMode(bgl);
      setToggle(modeb);
      setInputM('inputboxl');
      setRadioM('inputradl');
      setObjectM('objectl');
      setfincont('fincontl');
      setfin('finl');
      setfina('final');
      setfinb('finbl');
      setfinc('fincl');
      setfind('findl');
      setindieM('indieitemsl')
      setstuff1('stuff1l')
      setstuff2('stuff2l')
      // conditional statements make life easier
      if (Check === 'objectrad'){
        setmodeR('objectradcl');
      }
      else{
        setmodeR('objectradc');
      }
    }
    // dark mode called back
    else {
      setMode('App');
      setBgImMode(bgd);
      setToggle(modea);
      setInputM('inputbox');
      setRadioM('inputrad');
      setObjectM('object');
      setmodeR('');
      setfincont('fincont');
      setfin('fin');
      setfina('fina');
      setfinb('finb');
      setfinc('finc');
      setfind('find');
      setindieM('indieitems')
      setstuff1('stuff1')
      setstuff2('stuff2')
    }
  }

const toggleRad = (id) => {
  // id.preventDefault
  // console.log('toggleRad called');

  // functions
  setTasks(prev =>
    prev.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  );
  // assistance

  if (Check === 'objectrad'){
    setCheck('objectraddone')
    setRcheck('objectchecked')
    setmodeR('objectradc')
  }
  else {
    setCheck('objectrad')
    setRcheck('objectcheck')
    if (Mode === 'App') {
      setmodeR('objectradcd');
    }
    else{
      setmodeR('objectradcl');
    }
  }
  if (strikeOut === '') {
    setStrikeOut('completed')
  }
  else{
    setStrikeOut('')
  }
}

const showRem = (e) => {
  setRemUse('objectrem');
}
const showRemN = (e) => {
  setRemUse('objectremNuse');
}

const handleKeyPress = (e) => {
  if (e.key === "Enter" && e.target.value.trim() !== "") {
    const inputValue = e.target.value.trim();

    // only add a task if the input is not empty
      const newTask =  [...tasks,{id:crypto.randomUUID() ,text:inputValue,completed:false}]

      setTasks(newTask)
      
      // print at the console
      console.log(tasks);
      // clear the input box
      e.target.value = "";
 

    // else {
    //   // show optional message or error
    //   e.preventDefault();
    // }
  }
};

const handleDelete = (idToDelete) => {
  const newArray = tasks.filter(task => task.id !== idToDelete);
  setTasks(newArray);
};
const filteredTasks = tasks.filter(task => {
  if (filter === 'completed') return task.completed;
  if (filter === 'active') return !task.completed;
  return true; // 'all' shows everything
});

const deleteAllCompleted = () => {
  const notCompleted = tasks.filter(task => !task.completed);
  setTasks(notCompleted);
};

// settle react unused variable
console.log(modeR + rCheck)
  return (
    <div className={Mode}>
      <img src={bgImMode} alt='backgrounddark' className='bgdark' />
      <div className='maincontainer'>
        <div className='subcontainer' >
          <div className='topcont'>
            <span className='logo'>TODO</span>
            <button className='chngbutton'  onClick={toggleMode}>{/**/}
              <img src={toggle} className="chngmode" alt="togglemode" />
            </button>
          </div>
          <div className='inputbox1' >
            <button className={radioM}></button>
            <input type="text" className={inputM} placeholder='Create a new todo...' onKeyDown={handleKeyPress}/> {/* */}
          </div>

          {/* using maps to create objects from usestate array */}
          {
            filteredTasks.map((task) => (
              <div key={task.id} className = {indieM}>      
                <button className={task.completed ? 'objectraddone':'objectrad'} onClick={() => toggleRad(task.id)}  onMouseOver={showRem} onMouseLeave={showRemN} id={task.completed ? 'objectradc':''} ><img src={nodea} className={task.completed ? 'objectchecked' : 'objectcheck'} alt="checked" /></button>
                <span className={objectM}  id={task.completed ? 'completed' : ''} onMouseOver={showRem} onMouseLeave={showRemN}> <p className='objecttext' onClick={() => toggleRad(task.id)} >{task.text}</p></span>
                <button className={isMobile ? 'ojectremNuse' : isRemUse}  onMouseOver={showRem} onMouseLeave={showRemN} onClick={() => handleDelete(task.id)}><img src={nodeb} className="" alt="remove_elements" /></button>
              </div> 
            ))
          }

          {/* bottom layer */}
          <div className={fincont} id='desktop' >
            <span className={fin} >{totalTasks} items left</span>
            <button className={fina} onClick={() => {setFilter('all');setallblue('all_blue');setactiveblue('');setcompblue('')}} id={blue} >All</button> {/* onClick={() => setFilter('all')} */}
            <button className={finb} onClick={() => {setFilter('active');setallblue('');setactiveblue('active_blue');setcompblue('')}} id={ablue} >Active</button> {/* onClick={() => setFilter('active')} */}
            <button className={finc} onClick={() => {setFilter('completed');setallblue('');setactiveblue('');setcompblue('comp_blue')}} id={cblue} >Completed</button> {/* onClick={() => setFilter('completed')} */}
            <button className={find} onClick={deleteAllCompleted} >Clear Completed</button>
          </div>
          {/* bottomlayer mobile */}
          <div className={fincont} id='mobile' >
            <div className={stuff1} >
              <span className={fin} >{totalTasks} items left</span>
              <button className={find} onClick={deleteAllCompleted} >Clear Completed</button>
            </div>
            <div className={stuff2} >
              <button className={fina} onClick={() => {setFilter('all');setallblue('all_blue');setactiveblue('');setcompblue('')}} id={blue} >All</button>
              <button className={finb} onClick={() => {setFilter('active');setallblue('');setactiveblue('active_blue');setcompblue('')}} id={ablue} >Active</button>
              <button className={finc} onClick={() => {setFilter('completed');setallblue('');setactiveblue('');setcompblue('comp_blue')}} id={cblue} >Completed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;