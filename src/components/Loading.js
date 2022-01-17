// Loading
// loading icon by https://cssfx.netlify.app/

function Loading() {
  return (
    <div className='loadingContainer'>
      <svg viewBox='0 0 50 50' className='loadingIcon'>
        <circle className='ring' cx='25' cy='25' r='20'></circle>
        <circle className='ball' cx='25' cy='5' r='3.5'></circle>
      </svg>
    </div>
  )
}

export default Loading;