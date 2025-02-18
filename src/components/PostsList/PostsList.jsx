import { useSelector } from "react-redux";

const PostsList = () => {
  const photos = useSelector((state) => state.posts.posts);

  return (
    <ul
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        flexWrap: "wrap",
        listStyle: "none",
      }}
    >
      {photos.map((photo) => (
        <li
          key={photo.id}
          style={{
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            width: 240,
            height: 150,
            backgroundColor: "#eee8de",
            padding: 10,
          }}
        >
          <p>Name: {photo.name}</p>
          <p>Email: {photo.email}</p>
          <p>Phone: {photo.phone}</p>
        </li>
      ))}
    </ul>
  );
};
export default PostsList;
