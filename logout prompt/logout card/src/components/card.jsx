import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function Card() {
    return (
        <>
            <div className="card-1">
                <div className="logout-svg">
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className='svg-icon'/>
                </div>
                <h3 className="logout-header">
                    Logout
                </h3>
                <p className='logout-text'>
                    Are you sure you want to logout?
                </p>
                <div className="btn-elements">
                    <div className="logout-btn">
                        <button>
                            Yes, logout
                        </button>
                    </div>
                    <div className="cancel-btn">
                        <button>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="card-2">
                <div className="logout-svg">
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className='svg-icon'/>
                </div>
                <h3 className="logout-header">
                    Logout
                </h3>
                <p className='logout-text'>
                    Are you sure you want to logout?
                </p>
                <div className="btn-elements">
                    <div className="cancel-btn">
                        <button>
                            Cancel
                        </button>
                    </div>
                    <div className="logout-btn">
                        <button>
                            Yes, logout
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}