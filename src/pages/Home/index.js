import { useState, useEffect, useRef } from 'react';
import { GET_DATA } from '../../global/constants';
import React from 'react';
import Edit from './component/Edit';
import List from './component/List';
import './index.css';

async function fetchData(setData) {
  const res = await fetch(GET_DATA);
  const { data } = await res.json();
  setData(data);
}

async function fetchSetData(data) {
  await fetch(GET_DATA, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ data }),
  });
}

const Home = () => {
  // let a = 100;
  const [data, setData] = useState([]);
  const submittingStatus = useRef(false);

  useEffect(() => {
    if (!submittingStatus.current) {
      return;
    }
    fetchSetData(data).then((data) => (submittingStatus.current = false));
  }, [data]);

  useEffect(() => {
    fetchData(setData);
  }, []); // 綁定data異動所反映的事件, 若不綁定則指觸發一次

  // function plus() { // 利用prev保留目前值
  //   setA(function (prev) {
  //     return prev + 100;
  //   });
  // }

  return (
    <div className="app">
      <Edit add={setData} submittingStatus={submittingStatus} />
      <List
        listData={data}
        deleteData={setData}
        submittingStatus={submittingStatus}
      />
    </div>
  );
};

export default Home;
