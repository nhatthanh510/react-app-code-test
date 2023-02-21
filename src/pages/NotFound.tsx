
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className="pt-16">
      <div>
        <h1 className="mb-8 text-4xl font-extrabold text-center lg:text-5xl">
          404 Not found
        </h1>
        <div className="mt-8 text-center">
          <Link className="btn-link button-filled block" to="/">
            Go back to homepage
          </Link>
        </div>
      </div>

    </div>
  )

}

export default NotFound
