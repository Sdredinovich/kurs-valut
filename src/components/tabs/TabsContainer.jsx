import axios from "axios";
import React, { useEffect, useState } from "react";
import Tabs from "./Tabs";

const TabsContainer = (props) => {
  const [information, setInformation] = useState({});
  const [previous, setPrevious] = useState({
    CharCode: "",
    Name: "",
    previousValue: [],
    loading: false,
    overflow: false
  });

  const prev = (valute) => {
    setPrevious({ ...previous, loading: true});
    let counter = 9;
    const prevValMass = [];
    recurs(information.PreviousURL);
    function recurs(url) {
      axios.get(url).then((res) => {
        prevValMass.push({
          date: res.data.Date.substr(0, 10),
          value: res.data.Valute[valute.CharCode].Value,
        });

        if (counter > 0) {
          recurs(res.data.PreviousURL);
          counter = counter - 1;
        } else {
          setPrevious({
            ...previous,
            CharCode: valute.CharCode,
            Name: valute.Name,
            previousValue: [...prevValMass],
            loading: false,
            overflow: true
          });
        }
      });
    }
  };

  useEffect(() => {
    axios.get("https://www.cbr-xml-daily.ru/daily_json.js").then((res) => {
      for (let key in res.data.Valute) {
        const change =
          (res.data.Valute[key].Value / res.data.Valute[key].Previous - 1) *
          100;

        res.data.Valute[key] = {
          ...res.data.Valute[key],
          change: change.toFixed(3),
        };
      }

      return setInformation({ ...res.data });
    });
  }, []);

  return <Tabs previous={previous} prev={prev} valute={information.Valute} />;
};

export default TabsContainer;
