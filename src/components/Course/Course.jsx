/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';


const Course = ({course, handleAddToBookmark}) => {
    const {cover_img,title, description, price, credit} = course
    return (
        <div className="bg-white rounded-lg">
            <div className="p-4">
            <div className="flex justify-center">
            <img className='w-full' src={cover_img} alt="" />
            </div>
            <h2 className="text-lg font-semibold py-4">{title}</h2>
            <p className="font-light text-sm pb-4">{description}</p>
            <div className="flex justify-between text-lg font-light pb-4">
                <p><FontAwesomeIcon className='text-2xl text-slate-500' icon={faDollarSign}/> Price: {price}</p>
                <p><FontAwesomeIcon className='text-2xl text-slate-500' icon={faBookOpen} /> Credit: {credit}hr</p>
            </div>
            <button onClick={() => handleAddToBookmark(course)} className='bg-blue-500 text-white text-lg w-full rounded-md font-semibold h-10'>Select</button>
            </div>
        </div>
    );
};

export default Course;