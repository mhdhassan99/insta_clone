import { useEffect } from 'react';

export default function Dashboard() {
    useEffect(() => {
        document.title = 'Instagram';
    }, [])

    return (
        
        <div className="bg-gray-background">
            <Header></Header>

            <div className="grid">
                <Timeline />
                <Sidebar />
            </div>
        </div>
    )
}