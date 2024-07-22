import { Button, Input } from "reactstrap";

const SearchStudent = () => {
    return (
        <>
            <div className="mb-3 mt-5" style={{ display: "flex" }}>
                <Input
                    type="text"
                    className="form-control"
                    placeholder="Enter your keyword"
                />
                <Button
                    type="button"
                    color="primary"
                    style={{ marginLeft: "8px" }}
                >
                    Search
                </Button>
            </div>
        </>);
};

export default SearchStudent;