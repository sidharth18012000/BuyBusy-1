import { React, useState, useEffect } from "react";
// required components filter and main content
import FilterBar from "../Component/Home/FilterBar";
import MainContent from "../Component/Home/MainContent";
// css styles
import styles from "../styles/home.module.css";
// show loading spinner on first render
import Loader from "../Component/Loader/Loader";
import "bootstrap/dist/css/bootstrap.css";

//render Home page
export function Home() {
  //loading status by default true
  const [isLoading, setLoading] = useState(false);

  // show/hide the filter bar on homepage
  const [applyFilter, setApplyFilter] = useState(true);

  //to filter item on the basis of price and item category
  const [price, setPrice] = useState(5000);
  const [category, setCategory] = useState("none");

  //for search item as we have to set search dynamically
  const [search, setSearch] = useState("");
  //return component
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* // page header */}
          {/* Now we will render all the product in this place and filter bar */}
          <div className={styles.mainContainer}>
            <div className={styles.header}>
              {/* search bar */}
              <input
                type="text"
                placeholder="Search Item..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="container-fluid" style={{ padding: "initial" }}>
              {/* if applyFilter is true then render it else show all */}
              {/* show all product  */}
              <MainContent
                search={search}
                price={price}
                category={category}
                applyFilter={applyFilter}
              />
            </div>
            <div
              className="card"
              style={{ width: "20%", backgroundColor: "smokewhite" }}
            >
              {/* apply filter button //show/hide on button click */}
              <button
                className="btn btn-primary"
                onClick={() => setApplyFilter(!applyFilter)}
              >
                {applyFilter ? "Hide Filter" : "Apply Filter"}
              </button>
              {applyFilter && (
                <FilterBar
                  price={price}
                  setPrice={setPrice}
                  setCategory={setCategory}
                />
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
