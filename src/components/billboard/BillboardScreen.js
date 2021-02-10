import { useEffect } from 'react';
import { ProgramItem } from './ProgramItem';
import { useDispatch, useSelector } from "react-redux";
import { startAddNewProgram } from "../../actions/billboard";
import { ProgramModal } from "../billboard/ProgramModal";
import { orderArray } from "../../utils/utils";

export const BillboardScreen = ({ history }) => {

    const dispatch = useDispatch();
    const state  = useSelector(state => state);
    const { activeProgram } = useSelector(state => state.billboard);
    const { loading } = useSelector(state => state.ui);
    const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = useSelector(state => state.billboard)||[];

    const handleAddNewProgramMonday = () => {
        dispatch(startAddNewProgram('monday'));
    }
    const handleAddNewProgramTuesday = () => {
        dispatch(startAddNewProgram('tuesday'));
    }
    const handleAddNewProgramWednesday = () => {
        dispatch(startAddNewProgram('wednesday'));
    }
    const handleAddNewProgramThursday = () => {
        dispatch(startAddNewProgram('thursday'));
    }
    const handleAddNewProgramFriday = () => {
        dispatch(startAddNewProgram('friday'));
    }
    const handleAddNewProgramSaturday = () => {
        dispatch(startAddNewProgram('saturday'));
    }
    const handleAddNewProgramSunday = () => {
        dispatch(startAddNewProgram('sunday'));
    }

    useEffect(() => {
        if (state.auth.token === null) {
            history.replace('/login');
        }
    }, [state.auth.token != null])

    return (
        <div>
            {loading ? <p className="loading-margin">Cargando cartelera...</p> : <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card alert-primary">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="media d-flex justify-content-between">
                                            <div className="media-body text-right">
                                                <span className="font-bold">Lunes</span>
                                            </div>
                                            <i
                                                onClick={handleAddNewProgramMonday}
                                                className="fas fa-plus-square icon-green"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                orderArray(monday).map((item) =>
                                    <div className="program-container" key={`cont-${item._id}`}>
                                        <ProgramItem
                                            key={item._id}
                                            id={item._id}
                                            name={item.name}
                                            start={item.start}
                                            finish={item.finish}
                                            image={item.image}
                                            active={item.active}
                                            day='monday' />
                                    </div>
                                )
                            }
                        </div>
                        <div className="col">
                            <div className="card alert-primary">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="media d-flex justify-content-between">
                                            <div className="media-body text-right">
                                                <span className="font-bold">Martes</span>
                                            </div>
                                            <i 
                                            onClick={handleAddNewProgramTuesday}
                                            className="fas fa-plus-square icon-green"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                orderArray(tuesday).map((item) =>
                                    <div className="program-container" key={`cont-${item._id}`}>
                                        <ProgramItem
                                            key={item._id}
                                            id={item._id}
                                            name={item.name}
                                            start={item.start}
                                            finish={item.finish}
                                            image={item.image}
                                            active={item.active}
                                            day='tuesday' />
                                    </div>
                                )
                            }
                        </div>
                        <div className="col">
                            <div className="card alert-primary">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="media d-flex justify-content-between">
                                            <div className="media-body text-right">
                                                <span className="font-bold">Miércoles</span>
                                            </div>
                                            <i 
                                            onClick={handleAddNewProgramWednesday}
                                            className="fas fa-plus-square icon-green"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                orderArray(wednesday).map((item) =>
                                    <div className="program-container" key={`cont-${item._id}`}>
                                        <ProgramItem
                                            key={item._id}
                                            id={item._id}
                                            name={item.name}
                                            start={item.start}
                                            finish={item.finish}
                                            image={item.image}
                                            active={item.active}
                                            day='wednesday' />
                                    </div>
                                )
                            }
                        </div>
                        <div className="col">
                            <div className="card alert-primary">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="media d-flex justify-content-between">
                                            <div className="media-body text-right">
                                                <span className="font-bold">Jueves</span>
                                            </div>
                                            <i 
                                            onClick={handleAddNewProgramThursday}
                                            className="fas fa-plus-square icon-green"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                orderArray(thursday).map((item) =>
                                    <div className="program-container" key={`cont-${item._id}`}>
                                        <ProgramItem
                                            key={item._id}
                                            id={item._id}
                                            name={item.name}
                                            start={item.start}
                                            finish={item.finish}
                                            image={item.image}
                                            active={item.active}
                                            day='thursday' />
                                    </div>
                                )
                            }
                        </div>
                        <div className="col">
                            <div className="card alert-primary">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="media d-flex justify-content-between">
                                            <div className="media-body text-right">
                                                <span className="font-bold">Viernes</span>
                                            </div>
                                            <i 
                                            onClick={handleAddNewProgramFriday}
                                            className="fas fa-plus-square icon-green"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                orderArray(friday).map((item) =>
                                    <div className="program-container" key={`cont-${item._id}`}>
                                        <ProgramItem
                                            key={item._id}
                                            id={item._id}
                                            name={item.name}
                                            start={item.start}
                                            finish={item.finish}
                                            image={item.image}
                                            active={item.active}
                                            day='friday' />
                                    </div>
                                )
                            }
                        </div>
                        <div className="col">
                            <div className="card alert-primary">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="media d-flex justify-content-between">
                                            <div className="media-body text-right">
                                                <span className="font-bold">Sábado</span>
                                            </div>
                                            <i 
                                            onClick={handleAddNewProgramSaturday}
                                            className="fas fa-plus-square icon-green"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                orderArray(saturday).map((item) =>
                                    <div className="program-container" key={`cont-${item._id}`}>
                                        <ProgramItem
                                            key={item._id}
                                            id={item._id}
                                            name={item.name}
                                            start={item.start}
                                            finish={item.finish}
                                            image={item.image}
                                            active={item.active}
                                            day='saturday'/>
                                    </div>
                                )
                            }
                        </div>
                        <div className="col">
                            <div className="card alert-primary">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="media d-flex justify-content-between">
                                            <div className="media-body text-right">
                                                <span className="font-bold">Domingo</span>
                                            </div>
                                            <i 
                                            onClick={handleAddNewProgramSunday}
                                            className="fas fa-plus-square icon-green"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                orderArray(sunday).map((item) =>
                                    <div className="program-container" key={`cont-${item._id}`}>
                                        <ProgramItem
                                            key={item._id}
                                            id={item._id}
                                            name={item.name}
                                            start={item.start}
                                            finish={item.finish}
                                            image={item.image}
                                            active={item.active}
                                            day='sunday' />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <ProgramModal
                        show={activeProgram != null}
                    />
                </div>
            </div>}
        </div>
    )
}
