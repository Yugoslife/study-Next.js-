// components/Nav.js
import Link from 'next/link';

function Nav() {
    return (
        <nav>
            <ul className='flex space-x-4 pl-3'>
                <Link href="/" className='text-2xl text-black hover:underline mb-2'>
                    Home
                </Link>
                <Link href="/tasks/tasksEasy/TasksEasy" className='text-2xl text-black hover:underline mb-2'>
                    Easy Tasks
                </Link>
                <Link href="/tasks/tasksMedium/TasksMedium" className='text-2xl text-black hover:underline mb-2'>
                    Medium Tasks
                </Link>
            </ul>

        </nav>
    );
}

export default Nav;
