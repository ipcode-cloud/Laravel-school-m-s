import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <div className='flex justify-end gap-5 px-5 py-5'>
            <Link
            href={route("login")}
            className="text-sm text-white hover:underline bg-slate-900 rounded-md p-2 hover:no-underline"
            >
                Login
            </Link>
            <Link
            href={route("register")}
            className="text-sm text-white hover:underline bg-slate-900 rounded-md p-2 hover:no-underline"
            >
                Register
            </Link>
        </div>
        
    );
}
