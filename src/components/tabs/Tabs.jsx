import React from "react";
import Tab from "./Tab/Tab";
import s from "./Tabs.module.css";

const Tabs = (props) => {
  const keys = [];
  for (let key in props.valute) {
    keys.push(key);
  }

  return (
    <div className={s.tabs}>
 <div className={s.tabsDiv}>
      {keys.map((key) => {
        return <Tab prev={props.prev} key={props.valute[key].ID} valute={props.valute[key]} />;
      })}
</div>

{props.previous.overflow&&<div className={s.prevDiv}>


<div><p>Курс валюты за последние 10 рабочих дней</p>
  <p className={s.prevTitle}><span>{props.previous.CharCode}</span> ({props.previous.Name})</p>
  </div>
 {props.previous.previousValue.map(el=>{
   return <div className={s.dateDiv}>
     <div className={s.date}>
{el.date}
     </div>
     <div className={s.value}>
     {el.value}₽

     </div>

   </div>
 })}



</div>}

    </div>
  );
};

export default Tabs;
