import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}

const Users = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
    });

    if (isLoading) {
        return <h1>Loading....</h1>
    }

    if (error) {
        return <h1>Error: {error.message}</h1>;
    }

    return (
        <ul>
            {data?.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );

}

export default Users;