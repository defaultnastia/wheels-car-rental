import { useEffect, useState } from "react";
import css from "./Reviews.module.css";
import { getReviews, Review } from "../../services/reviewsAPI";
import toast from "react-hot-toast";
import ReviewCard from "../ReviewCard/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Reviews = () => {
  // todo: having an empty array (single-typed value) as a default value could make a more predictable state.
  const [reviews, setReviews] = useState<Review[] | []>([]);

  useEffect(() => {
    const fetchedReviews = async () => {
      try {
        const reviews = await getReviews();
        setReviews(reviews);
      } catch (error) {
        toast.error("Could't fetch the reviews");
      }
    };
    fetchedReviews();
  }, []);

  return (
    <>
      <h2 className={css.title}>Reviews</h2>
      <div>
        {reviews?.length > 0 ? (
          <Swiper
            className={css.swiper}
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              390: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
            }}
          >
            {reviews?.map((review: Review) => (
              <SwiperSlide key={review.id}>
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className={css.infoMessage}>No reviews yet</p>
        )}
      </div>
      <div className={css.counterWrapper}>
        <p className={css.callText}>
          Trust us your transportation needs and enjoy the freedom of the open
          road with confidence!
        </p>
      </div>
    </>
  );
};

export default Reviews;
