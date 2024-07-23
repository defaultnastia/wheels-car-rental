import { useEffect, useState } from "react";
import css from "./Reviews.module.css";
import { getReviews, Review } from "../../services/reviewsAPI";
import toast from "react-hot-toast";
import ReviewCard from "../ReviewCard/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {} from "swiper/modules";

const Reviews = () => {
  const [customers, setCustomers] = useState(() => {
    const savedCount = window.localStorage.getItem("customersCount");
    return savedCount ? JSON.parse(savedCount) : 3465;
  });

  const [reviews, setReviews] = useState<Review[] | null>(null);

  useEffect(() => {
    setInterval(() => {
      setCustomers(customers + 1);
    }, 20000);
  }, [customers]);

  useEffect(() => {
    window.localStorage.setItem("customersCount", JSON.stringify(customers));
  }, [customers]);

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
        <Swiper className={css.swiper} spaceBetween={20} slidesPerView={4}>
          {reviews?.map((review: Review) => {
            return (
              <SwiperSlide key={review.id}>
                <ReviewCard review={review} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={css.counterWrapper}>
        <p className={css.counter}>{customers}</p>
        <p className={css.callText}>
          customers (and the number is growing!) already trusted us their
          transportation needs and enjoyed the freedom of the open road with
          confidence!
        </p>
      </div>
    </>
  );
};

export default Reviews;
