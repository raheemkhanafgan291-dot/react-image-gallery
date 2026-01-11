import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./App.css";

const FirstComp = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(false);

  // ✅ useCallback fixes eslint dependency warning
  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=10`
      );
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching images", error);
    } finally {
      setLoading(false);
    }
  }, [index]);

  // ✅ useEffect with proper dependency
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="mainsection">
      <div className="user-data">
        {loading ? (
          <h3 className="Loading">Loading...</h3>
        ) : (
          userData.map((elem) => (
            <div key={elem.id} className="img-div-wrapper">
              <a href={elem.url} target="_blank" rel="noreferrer">
                <div className="img-div">
                  <img
                    className="img-box"
                    src={elem.download_url}
                    alt={elem.author}
                  />
                </div>
                <h2>{elem.author}</h2>
              </a>
            </div>
          ))
        )}
      </div>

      <div className="btnsec">
        <button
          className="btn"
          disabled={index === 1 || loading}
          onClick={() => setIndex(index - 1)}
        >
          Previous
        </button>

        <h1>{index}</h1>

        <button
          className="btn1"
          disabled={loading}
          onClick={() => setIndex(index + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FirstComp;
