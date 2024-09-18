import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import '../../../src/index.css'; // Ensure the path is correct


const Feature = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("post.json") // Update the path as needed
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (error) return <p className="text-center text-white">Error loading data!</p>;

  return (
    <div className="bg-[#14141F] py-12">
      <h2 className="lg:text-6xl text-[38px] mb-20 mt-40 text-white text-center" style={{ fontFamily: 'Maxima Nouva' }}>
        We work on story, <br />
        not just visuals.
      </h2>
      <Marquee speed={50} pauseOnHover={true} className="flex space-x-4" gradient={false}>
        {photos.length > 0 ? (
          photos.map((item) => (
            <div
              key={item.id}
              className="relative mb-4 rounded-lg overflow-hidden"
            >
              <div className="m-3 image-container border-none hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                <img
                  className="w-full h-80 object-cover carousel carousel-center rounded-box transition-transform transform hover:scale-105"
                  src={item.thumbnailUrl}
                  alt={item.title || 'Photo'}
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full h-full p-4 bg-white bg-none bg-opacity-50 text-yellow-100 rounded-t-lg transition-opacity duration-300 opacity-0 hover:opacity-100">
                <div className="flex justify-center items-center h-full">
                  <button 
                    style={{ fontFamily: 'Maxima Nouva' }} 
                    className=" items-center  h-[500px] w-[500px] border-none btn text-xl hover:text-black text-white hover:bg-white"
                    aria-label={`View story for ${item.title || 'Photo'}`}
                  >
                    Click to view story
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No photos available.</p>
        )}
      </Marquee>
    </div>
  );
};

export default Feature;
