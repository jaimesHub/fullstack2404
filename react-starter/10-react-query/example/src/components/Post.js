import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const fetchPosts = ({ pageParam = 1 }) => {
    return axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}`
    );
};

const Posts = () => {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isRefetchError,
    } = useInfiniteQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
        getNextPageParam: (lastPage, pages) => {
            // console.log('lastPage: ', lastPage);
            // console.log('pages: ', pages);
            return lastPage.data.length ? pages.length + 1 : undefined;
        },
    });

    if (isLoading) {
        return <h1>Loading....</h1>;
    }

    if (isRefetchError) {
        return <h1>Error</h1>;
    }

    console.log('data: ', data);
    console.log('hasNextPage: ', hasNextPage);

    return (
        <div>
            {data?.pages?.map((page, index) => (
                <ul key={index}>
                    {page?.data?.map((post) => (
                        <li>{post.title}</li>
                    ))}
                </ul>
            ))}
            <button
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
            >
                {isFetchingNextPage
                    ? 'Loading more...'
                    : hasNextPage
                        ? 'Load more'
                        : 'No more data'}
            </button>
        </div>
    );
};

export default Posts;