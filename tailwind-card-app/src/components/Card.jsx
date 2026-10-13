const Card = ({ title, description, buttonText, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-3 bg-blue-100 hover:bg-blue-200 flex flex-col">{/*flex-col to make the button stay at the bottom of the card*/}
      <img className="w-full h-36 object-cover p-2" src={imageUrl} alt={title} />
      <div className="px-6 py-4 flex-1">{/*flex-1 to make the content take up the remaining space*/}
        <div className="font-bold text-xl mb-2 dark:text-slate-900">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-2 border-blue-900 dark:bg-blue-900 dark:hover:bg-blue-400 dark:hover:text-blue-900 dark:border-black cursor-pointer">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
