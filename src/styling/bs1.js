function Carousel(){
    return(
    <>
<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item ">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/023/329/714/small/heart-tree-love-for-nature-red-landscape-at-sunset-generativ-ai-photo.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>
    )
}
export default Carousel
