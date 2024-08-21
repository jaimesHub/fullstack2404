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
        staleTime: 60000, // staleTime: là khoảng thời gian mà dữ liệu được coi là mới sau khi fetch từ API về 
        gcTime: 60000, // cacheTime: là khoảng thời gian mà dữ liệu được lưu trong cache 
        refetchOnWindowFocus: false
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