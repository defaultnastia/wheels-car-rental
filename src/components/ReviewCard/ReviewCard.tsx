import { Review } from "../../services/reviewsAPI";
import css from "./ReviewCard.module.css";

type Props = {
  review: Review;
};

const ReviewCard = ({ review }: Props) => {
  return (
    <div className={css.reviewCard}>
      <p>{review.name}</p>
      <p>⭐️⭐️⭐️⭐️⭐️</p>
      <p>{review.review}</p>
    </div>
  );
};

export default ReviewCard;
