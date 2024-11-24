import Button from "@/Components/Button";
import Table from "@/Components/table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Dashboard() {
    const [openTable, setOpenTable] = useState(false)
    const [currentTerm, setCurrentTerm] = useState(new Date().getFullYear())
    return (
        <AuthenticatedLayout header={<h2 className="h2">Dashboard</h2>}>
            <Head title="Dashboard" />

            <div className="grid place-items-center grid-cols-4 gap-2 mt-1 p-10 max-md:grid-cols-2 max-lg:grid-cols-3 max-sm:grid-cols-1 max-md:gap-2">
                <div className="card">
                    <span className="text-[35px]">12</span>
                    <p className="h2">Total Students</p>
                </div>
                <div className="card">
                    <span className="text-[35px]">12</span>
                    <p className="h2">Total Parents</p>
                </div>
                <div className="card">
                    <span className="text-[35px]">12</span>
                    <p className="h2">Total Admins</p>
                </div>
                <div className="card">
                    <span className="text-[35px]">12</span>
                    <p className="h2">Total Teachers</p>
                </div>
            </div>
            <div className="flex justify-center transition-all">
                <div className="p-5 px-16 border border-slate-400 w-[90%] rounded-md gap-4 flex flex-col transition-all overflow-auto">
                    <div className="flex justify-between">
                        <Button
                            text={
                                <h2 className="h2">School Events Calendar</h2>
                            }
                            setOpenTable ={setOpenTable}
                        />
                        <span className="text-white font-mono">Current-Year: {currentTerm}-{currentTerm+1}</span>
                    </div>
                    <Table openTable={openTable}/>
                </div>
            </div>
            {/* TODO make card componets*/}
        </AuthenticatedLayout>
    );
}
