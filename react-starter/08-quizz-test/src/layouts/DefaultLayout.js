import Navigation from "./Navigation";

import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

const { Content } = Layout;

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(50% - 8px)',
    maxWidth: '1300px',
    margin: 'auto',
    backgroundColor: 'transparent',
    padding: '12px',
};

const DefaultLayout = () => {
    return (
        <>
            <Navigation />
            <Layout style={layoutStyle}>
                <div className='body-page'>
                    <Content>
                        <Outlet />
                    </Content>
                </div>
            </Layout>
        </>
    );
}

export default DefaultLayout;