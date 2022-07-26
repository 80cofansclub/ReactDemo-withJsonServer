import React from 'react';
import Item from './Item';

const List = ({ listData, deleteData, submittingStatus }) => {
  // console.log('listData', listData);

  return (
    <div className="list">
      {listData.map((item) => {
        const { id, title, date, time } = item;
        return (
          <Item
            key={id}
            id={id}
            title={title}
            date={date}
            time={time}
            deleteData={deleteData}
            submittingStatus={submittingStatus}
          />
        );
      })}
    </div>
  );
};

export default List;
