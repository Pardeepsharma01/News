import React, { useState, useEffect } from "react";
import { Circles } from "react-loader-spinner";
import NewsItem from "./NewsItem";
import "./Module.css";
import { useSelector } from "react-redux";

export default function NewsBar(props) {
  const [article, setArticle] = useState([]);
  // const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);  // eslint-disable-line no-unused-vars
  const [isLoading, setIsLoading] = useState(true); // Add loader state
  const country = useSelector((state) => state.country);

  useEffect(() => {
    async function fetchMyAPI() {
      setIsLoading(true); // Show loader before fetching data
  //  let  url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${country}&max=9&apikey=fb495e536cb1cf7e0da778b445bc44cd&page=${page}`;
   let  url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${country}&max=9&apikey=fb495e536cb1cf7e0da778b445bc44cd`;

      let response = await fetch(url);
      response = await response.json();
      setArticle(response.articles);
      setTotalResults(response.totalResults);
      setIsLoading(false); // Hide loader after data is fetched
    }
    fetchMyAPI();
  }, [country, props.category]);

  //  The next 
  // const handlePreviousClick = async () => {
  //   let  url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${country}&max=9&apikey=fb495e536cb1cf7e0da778b445bc44cd&page=${page - 1}`;

  //   let data = await fetch(url);
  //   let parsedata = await data.json();
  //   console.log("this is data", parsedata);
  //   setArticle(parsedata.articles);
  //   setPage(page - 1);
  // };

  // const handleNextClick = async () => {
  //   let  url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${country}&max=9&apikey=fb495e536cb1cf7e0da778b445bc44cd&page=${page + 1}`;

  //   let data = await fetch(url);
  //   let parsedata = await data.json();
  //   console.log("this is data", parsedata);
  //   setArticle(parsedata.articles);
  //   setPage(page + 1);
  //   console.log("this is", parsedata);
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth", // for smooth scrolling
  //   });
  // };

  return (
    <>
      <div className="background">
        {isLoading && (
          <div className="loader-container">
            <Circles
              height="80"
              width="80"
              color="Yellow"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass="loader-style"
              visible={true}
            />
          </div>
        )}

        <div className="row">
          {article?.map((element) => {
            return (
              <div className="col-md-4 mt-4">
                <NewsItem
                  title={
                    element.title
                      ? element.title.slice(0, 45)
                      : "SpaceX rocket made a hole in ionosphere, clai..."
                  }
                  description={
                    element.description
                      ? element.description.slice(0, 80)
                      : 'Netflix has unveiled the "My Netflix" tab, which replaces the Downloads tab, as'
                  }
                  url={element.url}
                  imgUrl={element.image}
                ></NewsItem>
              </div>
            );
          })}
        </div>

        {/* <div className="sticky-bottom"> */}
          {/* <div className="container-fluid d-flex justify-content-between pt-2 pb-2 background sticky-bottom">
            <button
              type="button"
              className="btn btn-warning button-class"
              onClick={handlePreviousClick}
              disabled={page <= 1}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              className="btn btn-warning button-class"
              onClick={handleNextClick}
              disabled={page >= Math.ceil(totalResults / 10)}
            >
              Next &rarr;
            </button>
          </div> */}

          <footer>
            <div className="center pt-1  ">
              Copyright &copy; Pardeep Sharma. All rights reserved!
              <p>Yamuna Nagar, Haryana</p>
            </div>
          </footer>
        </div>
      {/* </div> */}
    </>
  );
}
