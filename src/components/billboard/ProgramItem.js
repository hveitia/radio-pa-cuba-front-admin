import { useDispatch } from 'react-redux';
import { startEditProgram, deleteProgram, setEnableDisableProgram } from "../../actions/billboard";

export const ProgramItem = ({ name, start, finish, image, active = true, id, day }) => {

    const dispatch = useDispatch();

    const handleStartEditProgram = () => {
        dispatch(startEditProgram(id, name, image, start, finish, day));
    }

    const handleDeleteProgram = () => {
        dispatch(deleteProgram(id, day));
    }

    const handleEnableProgram = () => {
        dispatch(setEnableDisableProgram(id, day, true));
    }
    const handleDisableProgram = () => {
        dispatch(setEnableDisableProgram(id, day, false));
    }

    return (
        <>
            <div className="card">
                <div className="card-content">
                    <div className="card-body custom-padding">
                        <div className="media d-flex">
                            <div className="media-body text-right">
                                <span>{name}</span>
                                <br />
                                <span>{`${start} - ${finish}`}</span>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>
                                <br />
                                <i className="fas fa-edit icon-blue" onClick={handleStartEditProgram}></i>
                                {
                                    active ? (
                                        <i className="fas fa-ban icon-red" onClick={handleDisableProgram}></i>
                                    ) :
                                        (
                                            <i className="fas fa-check icon-green" onClick={handleEnableProgram}></i>
                                        )
                                }
                                <i className="fas fa-trash icon-red" onClick={handleDeleteProgram}></i>
                            </div>
                            <img className="program-img " src={image} alt={name} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
