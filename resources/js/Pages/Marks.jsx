import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";


const Marks = () => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Marks
                </h2>
            }
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                        
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Marks;
