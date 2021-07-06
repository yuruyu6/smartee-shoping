import WorriedFaceEmojii from '../../assets/worried-face_emoji.png';

export default function NoSearchResult() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="w-30 select-none"
        src={WorriedFaceEmojii}
        alt="Data Not Found Emoji"
      />
      <p className="text-3xl text-center font-bold my-3 opacity-75">
        К сожалению, ничего не найдено
      </p>
    </div>
  );
}
