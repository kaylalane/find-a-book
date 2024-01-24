import clsx from "clsx";
import "../../styles/skeletons.scss";
import Button from "../ui/Button";
export default function BookPageSkeleton() {
    return (
        <>
            <div className="book-page-skeleton">
                <div className="book-page-image"></div>
                <div className="book-page-skeleton-content">
                    <div className="title-text-block"></div>
                    <div className="small-text-block"></div>
                    <div className="large-text-block"></div>

                    <div className="title-text-block"></div>
                    <div className="centered-div">
                        <div className="sub-title-text-block"></div>
                        <div className="avatar-skeleton"></div>
                        <div className=" star-container">
                            {[...new Array(5)].map((_arr, idx) => {
                                return (
                                    <div
                                        className={clsx("  star")}
                                        key={idx}
                                    ></div>
                                );
                            })}
                        </div>
                        <Button>Create a Review</Button>
                    </div>
                    <div className="sub-title-text-block"></div>
                </div>
            </div>
        </>
    );
}
