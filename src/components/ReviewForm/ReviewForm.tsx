import { type FC, useState, type FormEvent } from 'react';

interface FormData {
  rating: number;
  comment: string;
}

const ReviewForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    rating: 0,
    comment: '',
  });

  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating,
    }));
  };

  const handleCommentChange = (comment: string) => {
    setFormData(prev => ({
      ...prev,
      comment,
    }));
  };

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
  };

  const isValid = formData.rating > 0 && formData.comment.length >= 50;

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={star}
              id={`${star}-stars`}
              type="radio"
              checked={formData.rating === star}
              onChange={() => handleRatingChange(star)}
            />
            <label
              htmlFor={`${star}-stars`}
              className="reviews__rating-label form__rating-label"
              title={
                star === 5 ? 'perfect' :
                star === 4 ? 'good' :
                star === 3 ? 'not bad' :
                star === 2 ? 'badly' : 'terribly'
              }
            >
              <svg
                className="form__star-image"
                width="37"
                height="33"
                style={{ fill: formData.rating >= star ? '#ff9000' : '#c7c7c7' }}
              >
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </div>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
        onChange={(evt) => handleCommentChange(evt.target.value)}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
