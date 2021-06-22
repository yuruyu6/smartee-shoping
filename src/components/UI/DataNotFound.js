import RollingEyesEmoji from '../../assets/rolling-eyes-emoji.png';

export default function DataNotFound() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="w-30 select-none" src={RollingEyesEmoji} alt="Data Not Found Emoji" />
      <p className="text-3xl font-bold my-3 opacity-75">Ой, пока что тут ничего нету</p>
    </div>
  );
}
