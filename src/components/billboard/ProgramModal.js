import { Modal, Form, Button } from 'react-bootstrap';
import { startDeleteActiveProgram, handleEditProgram, upsertBillboard } from "../../actions/billboard";
import { useDispatch, useSelector } from "react-redux";
export const ProgramModal = (props) => {
    const dispatch = useDispatch();
    const { activeProgram } = useSelector(state => state.billboard);
    const { name, image, start, finish }  = activeProgram || '';
    const handleDeleteActiveProgram = () => {
        dispatch(startDeleteActiveProgram());
    }
    const handleSaveBillboard = () => {
        dispatch(upsertBillboard())
    }
    const handleNameValue = (e) => {
        const newActiveProgram = { ...activeProgram, name: e.target.value };       
        dispatch(handleEditProgram(newActiveProgram));
    }
    const handleImageValue = (e) => {
        const newActiveProgram = { ...activeProgram, image: e.target.value };       
        dispatch(handleEditProgram(newActiveProgram));
    }
    const handleStartValue = (e) => {
        const newActiveProgram = { ...activeProgram, start: e.target.value };       
        dispatch(handleEditProgram(newActiveProgram));
    }
    const handleFinishValue = (e) => {
        const newActiveProgram = { ...activeProgram, finish: e.target.value };       
        dispatch(handleEditProgram(newActiveProgram));
    }
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Body className="show-grid">
                <Form>
                    {activeProgram?.id == null ? <h3>
                        Adicionar programa
                    </h3> : <h3>Editar Programa</h3>}
                    <br />
                    <Form.Label><strong>Ingrese el nombre del programa.</strong></Form.Label>
                    <Form.Control size="sm" type="text"
                    value={name} onChange={handleNameValue}
                     placeholder="Nombre" name="name"/>
                    <br />
                    <Form.Label><strong>Ingrese la url de la imagen.</strong></Form.Label>
                    <Form.Control size="sm" type="text"
                    value={image} onChange={handleImageValue}
                     placeholder="Imagen" name="image"/>
                    <br />
                    <Form.Label><strong>Ingrese la hora de inicio del programa ej. 8:00</strong></Form.Label>
                    <Form.Control size="sm" type="text"
                    value={start} onChange={handleStartValue}
                     placeholder="Hora inicio" name="start"/>
                    <br />
                    <Form.Label><strong>Ingrese la hora de fin del programa ej. 14:00</strong></Form.Label>
                    <Form.Control size="sm" type="text"
                    value={finish} onChange={handleFinishValue}
                     placeholder="Hora fin" name="finish"/>
                    <br />
                </Form>
                <div className="d-flex justify-content-around">
                    <Button variant="success" type="submit" onClick={handleSaveBillboard}>
                        Guardar
                    </Button>
                    <Button variant="secondary" onClick={handleDeleteActiveProgram}>Cancelar</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}