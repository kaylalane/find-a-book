import clsx from "clsx";
import "../styles/reviews.scss";

export default function ReviewStars({ rating }: { rating: number }) {
    return (
        <div className=" star-container">
            {[...new Array(5)].map((_arr, idx) => {
                return (
                    <div
                        className={clsx(
                            "  star star--small",
                            idx <= rating && "star--selected"
                        )}
                        key={idx}
                    ></div>
                );
            })}
        </div>
    );
}
