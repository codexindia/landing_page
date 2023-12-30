
import LoadingBar from 'react-top-loading-bar'


const Loader = (props: any) => {
  

  return (
    <div>
      <LoadingBar

        color='#67d835'
        progress={props.progress}
        onLoaderFinished={() => props.SetProgress(0)}

      />

    </div>
  )
}

export default Loader