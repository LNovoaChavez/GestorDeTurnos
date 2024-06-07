import style from "./CustomerComments.module.css"

const CustomerComments = () => {
    const comments = [
        {
            text: "Amazing service and very professional!",
            name: "John Doe",
            rating: 5
        },
        {
            text: "I loved the personalized treatments!",
            name: "Jane Smith",
            rating: 4
        },
        {
            text: "Great experience, will come back again!",
            name: "Emily Johnson",
            rating: 5
        }
    ];

    return (
        <div className={style.commentsContainer}>
            <div className={style.commentsHeader}>
                <h2>¿What our customers say?</h2>
                <p>Read what our customers say about us</p>
            </div>
            <div className={style.commentsBox}>
                {comments.map((comment, index) => (
                    <div className={style.commentCard} key={index}>
                        <p className={style.commentText}>"{comment.text}"</p>
                        <p className={style.commentName}>- {comment.name}</p>
                        <div className={style.commentRating}>
                            {Array(comment.rating).fill('⭐')}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CustomerComments;