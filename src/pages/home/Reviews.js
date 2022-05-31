import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import Review from "./Review";

const Reviews = () => {
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch("https://rocky-lowlands-40582.herokuapp.com/review").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mb-16">
      <h2 className="text-3xl text-center text-accent mt-12 mb-8 font-bold">
        Client Reviews
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-8 px-16">
        {reviews?.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
