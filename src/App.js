import { useState } from 'react';
import './App.css';
import Card from './components/Card'

/*4. Задание
Сделайте поле для ввода имени, а под ним строку "Привет, %name%".
При вводе текста в поле, должен меняться текст под ним.
Если имя это "Санчелло", то строка должна быть "Саня, верни долг!!!"
Рядом с полем для ввода, должна быть кнопка очистить.*/

function App() {

  const [firstName, setFirstName] = useState('');
  const [msg, setMsg] = useState('');

  function onClickClear() {
    setFirstName('');
    setMsg('');
  }

  let data1={type: "Брюки",
            price: 2500,
            content: "Брюки утепленные мужские Glissade",
            buttonText: "Размер 54"};
  let data2={type: "Рубашка",
             price: 1500,
             content: "Рубашка мужская Outventure",
             buttonText: "Размер 54"};
  let data3={type: "Ремень",
             price: 1000,
             content: "Ремень Vans Hunter Ii Pu",
             buttonText: "Размер 130"};

  function onClickLeft() {
    document.querySelector('.txt').style.textAlign='left';
  }

  function onClickRight() {
    document.querySelector('.txt').style.textAlign='right';
  }

  function onClickCenter() {
    document.querySelector('.txt').style.textAlign='center';
  }

  /*3. Задание:
       Написать компонент который меняет выравнивание текста (text-align) у элемента h2 по кликам на кнопки HTML:  
    <div>
      <h2 style={}>Align me</h2>
      <button>Left</button>
      <button>Center</button>
      <button>Right</button>
    </div>
  */

  return (
    <div className="App">  
      <label>Введите имя: </label>         
      <input value={firstName}   name="firstName" onChange={e => {
          setFirstName(e.target.value);
          if (e.target.value==="") {setMsg('');}
          else
           {
            if (e.target.value==="Санчелло") {setMsg("Саня, верни долг!!!");}
            else
             {setMsg("Привет, "+e.target.value+"!");}}
        }} />       
      <button type="button" onClick={onClickClear}>Очистить</button>  
      <br/>
      <label className='imia'>{msg}</label>
      <br/><br/>
      <Card card={data1}/>
      <Card card={data2}/>
      <Card card={data3}/>
      <br/><br/>
      <h2 className="txt">
          Соединенные Штаты и союзники 20 марта 2003 года начали военную операцию "Шок и трепет", 
          направленную на свержение режима иракского лидера Саддама Хусейна. Предлогом для интервенции, 
          которая происходила без санкции Совбеза ООН, послужили обвинения в наличии у страны оружия массового 
          уничтожения. В итоге данные американских разведслужб не подвтердились. Война привела к гибели более 
          100 тысяч мирных жителей, стала причиной обострения конфликта между суннитами и шиитами, создала 
          хаос в Ираке и почву для становления "Исламского государства".</h2>
      <button type="button" onClick={onClickLeft}>Left</button><br/>
      <button type="button" onClick={onClickRight}>Right</button><br/>
      <button type="button" onClick={onClickCenter}>Center</button><br/>
    </div>
  );
}

export default App;
