import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const fetchUsers = async () => {
    try {
        // const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const response = await fetch("http://localhost:8080/users");
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}

const addUser = async (newUser) => {
    return axios.post("http://localhost:8080/users", newUser);
}

const updateUser = async ({ userUpdate, id }) => {
    console.log('userUpdate: ', userUpdate);
    console.log('id: ', id);
    return axios.put(`http://localhost:8080/users/${id}`, userUpdate);
};

const deleteUser = async (id) => {
    return axios.delete(`http://localhost:8080/users/${id}`);
};

const Users = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
        staleTime: 60000, // staleTime: là khoảng thời gian mà dữ liệu được coi là mới sau khi fetch từ API về 
        gcTime: 60000, // cacheTime: là khoảng thời gian mà dữ liệu được lưu trong cache 
        refetchOnWindowFocus: false // ko tự động refresh khi user quay lại ứng dụng 
    });

    // example useMutation
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: addUser,
        onSuccess: () => {
            console.log("Handling successfully!");
            queryClient.invalidateQueries(["users"]);
        }
    });

    console.log("mutation: ", mutation);

    const handleAddUser = () => {
        const newUser = {
            email: "test-react-query-3@gmail.com",
            password: "12345678",
            username: "test-react-query-3",
            role: "user"
        };

        mutation.mutate(newUser);
    }

    const mutationUpdate = useMutation({
        mutationFn: updateUser,
        onSuccess: () => {
            console.log('Xử lý thành công chỉnh sửa');
            queryClient.invalidateQueries(['users']);
        },
    });

    const handleUpdateUser = () => {
        const userUpdate = {
            email: 'test-react-query-3-edited@gmail.com',
            password: '12345678',
            username: 'test-react-query-3-edited',
            role: 'user',
        };

        mutationUpdate.mutate({ userUpdate, id: '3d8d' });
    };

    const mutationDelete = useMutation({
        mutationFn: deleteUser,
        onSuccess: () => {
            console.log('Xử lý thành công xóa');
            queryClient.invalidateQueries(['users']);
        },
    });

    const handleDeleteUser = () => {
        mutationDelete.mutate('c953');
    };

    if (isLoading) {
        return <h1>Loading....</h1>
    }

    if (error) {
        return <h1>Error: {error.message}</h1>;
    }

    return (
        <>
            <ul>
                {data?.map((user) => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
            <div>
                <button onClick={handleAddUser}>Add user</button>
                <button onClick={handleUpdateUser}>Cập nhật người dùng</button>
                <button onClick={handleDeleteUser}>Xóa người dùng</button>
            </div>
        </>

    );

}

export default Users;