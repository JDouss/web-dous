import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="lg-split-layout">
            <Sidebar />
            <main style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
