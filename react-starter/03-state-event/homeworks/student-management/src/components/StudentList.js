import { Table } from "reactstrap";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const StudentList = () => {
    return (
        <>
            <div className="mt-5">
                <Table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#STT</th>
                            <th scope="col">Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Math score</th>
                            <th scope="col">English score</th>
                            <th scope="col">Literature score</th>
                            <th scope="col">Average score</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>

                    <tbody id="info-student">

                    </tbody>
                </Table>

                <Pagination>
                    <PaginationItem>
                        <PaginationLink
                            first
                            href="#"
                        />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                            href="#"
                            previous
                        />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            4
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            5
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                            href="#"
                            next
                        />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                            href="#"
                            last
                        />
                    </PaginationItem>
                </Pagination>
            </div>
        </>
    );
}

export default StudentList;