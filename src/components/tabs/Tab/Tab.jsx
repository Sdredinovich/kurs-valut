import React from "react";
import s from "./Tab.module.css";

const Tab = (props) => {
  return (
    <div className={s.tab} onClick={()=>props.prev(props.valute)}  title={props.valute.Name}>
      <div className={s.charCode}>
        <p className={s.charCodeP}>{props.valute.CharCode}</p>
      </div>
      <div className={s.value}>
        <p className={`${s.valueP}`}>
          {props.valute.Value}
          <span> ₽</span>
        </p>
      </div>
      <div className={s.change}>
        <p
          className={`${s.changeP} ${props.valute.change > 0 ? s.top : s.add}`}
        >
          {" "}
          {props.valute.change > 0 ? <span>🡹</span> : <span>🡻</span>}{" "}
          {props.valute.change > 0 && "+"}
          {props.valute.change}%
        </p>
      </div>

<div className={s.tooltip}>

</div>
    </div>
  );
};

export default Tab;
