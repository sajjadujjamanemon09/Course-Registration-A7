import Bookmark from "../Bookmark/Bookmark";

/* eslint-disable react/prop-types */
const Bookmarks = ({bookmarks, remainingHour, totalCredit}) => {
    return (
        <div className="md:w-1/4 w-80 h-min bg-white rounded-lg p-4">
            <h2 className="font-bold text-xl border-b-2 p-3 text-blue-500">Credit Hour Remaining {remainingHour} hr </h2>
            <h2 className="font-bold text-xl p-3">Course Name</h2>
            {
                bookmarks.map((bookmark, index) => <Bookmark key={bookmark.id} bookmark={bookmark} index={index}></Bookmark>)
            }
            <h2>Total Credit Hour: {totalCredit}</h2>
        </div>
    );
};

export default Bookmarks;