import Product from './components/Product';
import './App.css';
import { useEffect, useState } from 'react';
import { Pagination } from './components/Pagination';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [prod, setProd] = useState([])
  // const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10)

  const Fetch = async () => {
    // setLoading(true)
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json()
    setProd(data)
    // setLoading(false)
    // console.log(prod.length)

  }

  useEffect(() => {
    Fetch()
  }, [])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = prod.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="App">
      <h1>Top rated products</h1>
      <div className='container'>
        {currentPosts.map((value) => {
          return (
            <Product
              title={value.title}
              image={value.image}
              catagory={value.catagory}
              price={value.price}
              rating={value.rating.rate}
              description={value.description}
            />
          )
        })}

      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={prod.length}
        paginate={paginate} />
    </div>
  );
}

export default App;
