import Bookmark from "../Bookmark/Bookmark";

/* eslint-disable react/prop-types */
const Bookmarks = ({bookmarks, remainingHour, totalCredit, totalPrice}) => {
    return (
        <div className="md:w-1/4 ml-4 h-min bg-white rounded-lg p-4">
            <h2 className="font-bold text-xl border-b-2 p-3 text-blue-500">Credit Hour Remaining {remainingHour} hr </h2>
            <h2 className="font-bold text-xl p-3">Course Name</h2>
            <div className="pl-3 pb-3">
            {
                bookmarks.map((bookmark, index) => <Bookmark key={bookmark.id} bookmark={bookmark} index={index}></Bookmark>)
            }
            </div>
            <h2 className="border-t-2 p-3 font-medium text-lg">Total Credit Hour: {totalCredit}</h2>
            <h2 className="border-t-2 p-3 font-semibold text-lg">Total Price: <span>{totalPrice} USD</span></h2>

        </div>
    );
};

export default Bookmarks;