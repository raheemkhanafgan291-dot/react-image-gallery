import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; 


const FirstComp = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
      setUserData(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <div className='mainsection'>
      <div className='user-data'>
        {loading ? (
          <h3 className='Loading'>Loading...</h3>
        ) : (
          userData.map((elem, idx) => (
            <div key={elem.id} className='img-div-wrapper'>
              <a href={elem.url} target="_blank" rel="noreferrer">
                <div className='img-div'>
                  <img className='img-box' src={elem.download_url} alt={elem.author} />
                </div>
                <h2>{elem.author}</h2>
              </a>
            </div>
          ))
        )}
      </div>

      <div className='btnsec'>
        <button
          className='btn'
          onClick={() => {
            if (index > 1) setIndex(index - 1);
          }}
        >
          Previous
        </button>

        <h1>{index}</h1>

        <button
          className='btn1'
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FirstComp;
