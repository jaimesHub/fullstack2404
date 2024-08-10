import {
    ClockCircleOutlined,
    QuestionCircleOutlined,
    SearchOutlined,
    StarOutlined,
    StockOutlined,
} from '@ant-design/icons';
import {
    Avatar,
    Button,
    Card,
    Divider,
    Input,
    List,
    Select,
    Skeleton,
    Space,
    Table,
    Tag,
} from 'antd';
import React from 'react';

const Transcript = () => {
    const columns = [
        {
            title: 'Mã đề thi',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Môn thi',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Tên đề thi',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Thời gian',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Điểm',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    return (
        <>
            <div
                style={{
                    marginTop: '32px',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <h1>Bảng điểm cá nhân</h1>
            </div>
            <div style={{ marginTop: '32px' }}>
                <Table columns={columns} dataSource={data} />
            </div>
        </>
    );
};

export default Transcript;