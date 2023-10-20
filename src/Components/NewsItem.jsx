import React from 'react'

export default function NewsItem(props) {
  return (
    // <div className="card" style={{width: "18rem"}}>
    <div className="card mobile-items pc-items">
    {/* <img src={props.imgUrl?props.imgUrl:"https://cdn.ndtv.com/common/images/ogndtv.png"} className="card-img-top" alt="..."/> */}
    <img src={props.imgUrl?props.imgUrl:"https://cdn.ndtv.com/common/images/ogndtv.png"} className="card-img-top" alt="..." style={{ width: '100%', height: '200px' }}/>
    <div className="card-body">
      <h5 className="card-title">{props.title}...</h5>
      <p className="card-text">{props.description}...</p>
      <a href={props.url} className="btn btn-warning button-class">Show More..</a>
    </div>
  </div>
  )
}
