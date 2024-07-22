import { Button, Input } from 'reactstrap';
const NewStudent = () => {
    return (
        <>
            <div className='mb-3'>
                <label className="form-label">Name</label>

                <Input
                    type='text'
                    placeholder='Enter name...'
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Gender</label>

                <div className="form-check">
                    <Input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                    />
                    <label className="form-check-label"> Nam </label>
                </div>
                <div className="form-check">
                    <Input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                    />
                    <label className="form-check-label"> Nữ </label>
                </div>
            </div>

            <div className="mb-3">
                <label className="form-label">Math score</label>

                <Input
                    type="text"
                    className="form-control"
                    placeholder="Enter your math score"
                />
            </div>

            <div className="mb-3">
                <label className="form-label">English score</label>

                <Input
                    type="text"
                    className="form-control"
                    placeholder="Enter your english score"
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Literature score</label>

                <Input
                    type="text"
                    className="form-control"
                    placeholder="Enter your literature score"
                />
            </div>

            <Button type="button" color="primary" className="me-2">Add student</Button>
            <Button type="button" color="success">Update student</Button>
        </>
    );
}

export default NewStudent;