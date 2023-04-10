import Star from "./Star";

const Card = ({ post }) => {
  return (
    <div className="card mx-auto col-11 mb-3" style={{ maxWidth: "500px" }}>
      <div className="post-header col-12 py-2 px-3">
        <div className="row mb-2">
          <div className="col-3 pe-1">
            <img
              src={post.photo_url}
              className="img-thumbnail rounded-circle shadow"
              style={{ width: "60px", height: "60px" }}
              alt="profile"
            />
          </div>
          <div className="col-7 float-start px-1">
            <h4 className="mb-0">{post.user_name}</h4>
            {post.handle}
          </div>
          <div className="col-2 float-end text-end post-number ps-1">
            {post.age}
          </div>
        </div>
        <div className="row">
          <div className="col-5 float-start card-text">
            <h6>{post.name}</h6>
          </div>
          <div className="col-3 text-center">
            <h6>
              <span className="align-middle">{post.rating + " "}</span>
              <Star />
            </h6>
          </div>
          <div className="col-4 float-end text-end card-text">
            <h6>
              View rec{" "}
              <i
                className="bi bi-arrow-right"
                style={{ fontSize: "1em", lineHeight: "1em" }}
                role="button"
              ></i>
            </h6>
          </div>
        </div>
      </div>
      <img className="card-img" src={post.picture_url} alt="food item" />
      <div className="row card-body px-3">
        <div className="col-2 pe-1">
          <img
            src={post.photo_url}
            className="img-thumbnail rounded-circle shadow"
            style={{ width: "40px", height: "40px" }}
            alt="profile"
          />
        </div>
        <div className="col-10 px-1">
          <p className="card-text">{post.comment}</p>
        </div>
      </div>
      <div className="d-flex justify-content-around pb-2">
        <i className="bi bi-heart" role="button"></i>
        <i className="bi bi-chat-text" role="button"></i>
        <i className="bi bi-bookmark-plus" role="button"></i>
        <i className="bi bi-share" role="button"></i>
      </div>
    </div>
  );
};

export default Card;
