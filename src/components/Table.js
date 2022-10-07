import React, {useState, useEffect} from 'react';
import axios  from 'axios';
import * as ReactBootStrap from 'react-bootstrap';


const Table = () => {

  const [posts, setPost] = useState({blogs: []})

  useEffect(() => {
    const fetchPostList = async () =>{
      const {data} = await axios("http://fetest.pangeatech.net/data");
      setPost({blogs:data})
      console.log(data)
    }
    fetchPostList()
  },[setPost])

  return (
    <div>
      <ReactBootStrap.Table striped bordered hover>
      <thead>
        <tr>
          <th>S No</th>
          <th>Line of Business</th>
          <th>Revenue Type</th>
          <th>Product</th>
          <th>Posting period</th>
          <th>Month</th>
          <th>ACV</th>
          <th>TCV</th>
          <th>Revenue</th>
        </tr>
      </thead>
      <tbody>
        {
          posts.blogs && posts.blogs.map((item) =>(

          <tr key={item.S_no}>
            <td>{item.S_no}</td>
            <td>{item.line_of_business}</td>
            <td>{item.revenue_type}</td>
            <td>{item.product}</td>
            <td>{item.year}</td>
            <td>{item.month}</td>
            <td>{item.acv}</td>
            <td>{item.tcv}</td>
            <td>{item.revenue}</td>
          </tr>
          ))
        }
      </tbody>
      </ReactBootStrap.Table>
    </div>
  )
}

export default Table;
