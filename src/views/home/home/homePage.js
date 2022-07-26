import React from "react";

export const HomePage = ({ data, term }) => {
  return (
    <>
      {(!!data && term && (
        <div>
          <p>
            About {data?.searchInformation?.formattedTotalResults} results (
            {data?.searchInformation?.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items?.map((item, i) => (
            <div key={i}>
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="container__img"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>
              <a href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p>{item.snippet}</p>
            </div>
          ))}
        </div>
      )) || <>Not Found</>}
    </>
  );
};

export default HomePage;
