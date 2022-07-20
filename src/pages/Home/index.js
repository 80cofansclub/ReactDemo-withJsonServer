import { useState, useEffect } from 'react';
import { GET_DATA } from '../../global/constants';
import React from 'react';
import Edit from './component/Edit';
import List from './component/List';
import './index.css';

async function fetchData() {
  const res = await fetch(GET_DATA);
  const data = await JSON.stringify(res.json());
  console.log(data);
}

const Home = () => {
  // let a = 100;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); // 綁定data異動所反映的事件

  // function plus() { // 利用prev保留目前值
  //   setA(function (prev) {
  //     return prev + 100;
  //   });
  // }

  return (
    <div className="app">
      <Edit add={setData} />
      <List listData={data} deleteData={setData} />
    </div>
  );
};

export default Home;
