
import LoadingBar from 'react-top-loading-bar'

const Loader = (props) => {
  

  return (
    <div>
      <LoadingBar

        color='#67d835'
        progress={props.progress}
        onLoaderFinished={() => props.setProgress(0)}

      />

    </div>
  )
}

export default Loader