import React from 'react';
import 'styles/globals.css';
import 'tailwindcss/tailwind.css';
import Border from '../../../components/layouts/Border';
import Task1 from '../../../components/tasks/tasksEasy/Task1';
import Task2 from '../../../components/tasks/tasksEasy/Task2';
import Task3 from '../../../components/tasks/tasksEasy/Task3';
import Task4 from '../../../components/tasks/tasksEasy/Task4';
import Task5 from '../../../components/tasks/tasksEasy/Task5';
import Task6 from '../../../components/tasks/tasksEasy/Task6';
import Task7 from '../../../components/tasks/tasksEasy/Task7';
import Task8 from '../../../components/tasks/tasksEasy/Task8';

function TasksEasy() {
    return (
        <div>

            <Border><Task1 /></Border>
            <Border><Task2 /></Border>
            <Border><Task3 /></Border>
            <Border><Task4 /></Border>
            <Border><Task5 /></Border>
            <Border><Task6 /></Border>
            <Border><Task7 /></Border>
            <Border><Task8 /></Border>



        </div>
    );
}

export default TasksEasy;