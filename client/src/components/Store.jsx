import React, { useState, useEffect } from "react";
import AdCard from "./DisplayAds/AdCard";
import Movie from "./DisplayAds/Addetails";
import axios from "axios";
import AdList from "./AdList";

const Store = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("/bookads/allads").then((res) => {
      // console.log(res.data);

      //console.log(res.data.book);
      var allBooks = res.data.book.map((b) => (
        <AdList
          author={b.Author}
          title={b.Title}
          price={b.Price}
          bookImage={b.BookImages}
          category={b.Condition}
        />
      ));
      setBooks(allBooks);
      // console.log(ads);
    });
  }, []);

  return (
    <>
     <div class="breacrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-text">
                        <a href="#"><i class="fa fa-home"></i> Home</a>
                        <span>Store</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <section class="product-shop spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 order-1 order-lg-2">
            <div class="product-list">
              <div class="row">{books}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Store;
