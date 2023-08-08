import React from 'react';
import DataTable from './Datatable.js'


// const data2 = [1,2,3,4,5];
//             const newArr = [];
//             for(let i =data2.length;i>=0; i--){
//                 newArr.push(data2[i]);
//                 console.log(i,"====",data2[i])
//             }
            //console.log(newArr)
const columns = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Age',
    accessor: 'age',
  },
  {
    Header: 'st',
    accessor: 'st',
  },
  // Add more columns as needed
];

const data = [
  { name: 'John', age: 25,st : "e" },
  { name: 'Jane', age: 30 ,st : "b" },
  { name: 'Jane', age: 30 ,st : "b" },
  { name: 'Jane', age: 30 ,st : "b" },
  { name: 'Jane', age: 30 ,st : "b" },
  { name: 'Jane', age: 30 ,st : "b" },
  { name: 'Jane', age: 30 ,st : "b" },
  { name: 'Jane', age: 30 ,st : "b" },
  { name: 'Jane', age: 30 ,st : "b" },
  { name: 'Jane', age: 30 ,st : "b" },
  { name: 'John', age: 25,st : "e" },
  { name: 'Jane', age: 30 ,st : "b" },
  { name: 'Jane', age: 30 ,st : "b" },
  { name: 'Jane', age: 30 ,st : "b" },
  { name: 'Jane', age: 30 ,st : "b" },
  { name: 'Jane', age: 30 ,st : "b" },
  { name: 'Jane', age: 30 ,st : "b" },
  { name: 'Jane', age: 30 ,st : "b" },
  { name: 'Jane', age: 30 ,st : "b" },
  { name: 'Jane', age: 30 ,st : "b" },
  // Add more data rows as needed
];

const ReactTable = () => {
    return (
        <div>
          <h1>Table with Export to CSV search filter and pagination </h1>
          <DataTable columns={columns} data={data} />
          
        </div>
      );
}

export default ReactTable