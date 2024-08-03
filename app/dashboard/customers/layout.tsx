export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden ">
            <div className="w-full flex-none md:w-32 bg-blue-300">
                <div>测试子导航</div>
            </div>
            <div className="flex-grow p-10 md:overflow-y-auto">
                {children}
            </div>
        </div>
    );
}