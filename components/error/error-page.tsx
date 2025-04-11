
export const ErrorPage = () => {
  return (
    <div className="m-auto w-full">
      <div className="flex flex-col items-center justify-center space-y-6">
        <h2 className="text-lg">Oops! Something went wrong!</h2>
        <button
          onClick={() => {
            window.location.reload()
          }}
        >
          Try again
        </button>
      </div>
    </div>
  )
}
