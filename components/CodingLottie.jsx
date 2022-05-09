import Lottie from 'react-lottie'

function CodingLottie({animationPath}) {
    	const defaultOptions = {
        loop: true,
        autoplay: true,
        path: animationPath,
      };


  return (
    <div onClick={() => null}>
      <Lottie options={defaultOptions} />
    </div>
  );
}
export default CodingLottie