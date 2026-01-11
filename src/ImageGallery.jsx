import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "./ImageGallery.css";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchImages = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=12`
      );
      setImages(res.data);
    } catch (error) {
      console.error("Error fetching images", error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <div className="gallery-container">
      <h1>Image Gallery</h1>

      {loading && <p className="loading">Loading...</p>}

      <div className="gallery">
        {images.map((img) => (
          <div key={img.id} className="card">
            <img
              src={`https://picsum.photos/id/${img.id}/400/300`}
              alt={img.author}
            />
            <p>{img.author}</p>
          </div>
        ))}
      </div>

      <button className="btn" onClick={() => setPage(page + 1)}>
        Load More
      </button>
    </div>
  );
};

export default ImageGallery;
