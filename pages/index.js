// pages/index.js
import Link from 'next/link';
import 'styles/globals.css';
import 'tailwindcss/tailwind.css';
import 'styles/customStyles.css';

const data = [{ id: 'TasksEasy', value: "Go to Easy Tasks" },
{ id: 'TasksMedium', value: "Go to Medium Tasks" }
]

function HomePage() {
    return (
        <div>
            <h1 className='text-7xl font-bold text-center mt-10 gradient-text'>
                Welcome to My Website
            </h1>
            <div className='flex flex-col items-center mt-20'>
                {data.map((item) => <Link href={`/tasks/tasksEasy/${item.id}`} className="text-2xl text-black hover:underline mb-2">
                    {item.value}
                </Link>)}
            </div>

        </div>
    );
}

export default HomePage;


