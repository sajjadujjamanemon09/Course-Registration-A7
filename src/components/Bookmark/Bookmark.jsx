/* eslint-disable react/prop-types */


const Bookmark = ({bookmark, index}) => {
    const {title} = bookmark
    const serialNumber = index + 1;
    return (
        <div>
            <h3 className="text-sm font-light px-2 pt-2">
            {serialNumber}.{title}
            </h3>
        </div>
    );
};

export default Bookmark;