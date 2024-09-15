<script setup>
import { ref, computed, defineProps } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import BasicButton from '@/Components/BasicButton.vue';
import Modal from '@/Components/Modal.vue';
import DangerButton from '@/Components/DangerButton.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import TextArea from '@/Components/TextArea.vue';
import { useToast } from "primevue/usetoast";

const toast = useToast();

const showSuccess = (text) => {
    toast.add({ severity: 'success', summary: 'Success Message', detail: text, life: 3000 });
};

const showInfo = (text) => {
    toast.add({ severity: 'info', summary: 'Info Message', detail: text, life: 3000 });
};

const showWarn = (text) => {
    toast.add({ severity: 'warn', summary: 'Warn Message', detail: text, life: 3000 });
};

const showError = (text) => {
    toast.add({ severity: 'error', summary: 'Error Message', detail: text, life: 3000 });
};
const props = defineProps({
    tasks: Array,
});

const form = useForm({
    title: '',
    description: '',

});

const createTaskModal = ref(false);
const selectedFilter = ref('all');
const search = ref('');


const submitTask = () => {
    form.post(route('tasks.store'), {
        onSuccess: () => {
            form.reset();
            showSuccess('Task created successfully');
            createTaskModal.value = false;
        },
    });
};

const openTaskModal = () => {
    console.log('Opening task modal');
    createTaskModal.value = true;
};
const closeModal = () => {
    createTaskModal.value = false;
    form.reset();
};

const toggleComplete = (task) => {

    form.put(route('tasks.completed', task.id), {
        onSuccess: () => {
            console.log('Task updated successfully');
        },
        onError: (error) => {
            console.error('  updating task:', error);
        }
    });
};




const deleteTask = (task) => {
    form.delete(route('tasks.destroy', task.id), {
        onSuccess: () => {
            console.log('Task deleted successfully');
        },
        onError: (error) => {
            console.error('Error deleting task:', error);
        }
    });
};








</script>

<template>

    <Head title="Tasks" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Tasks
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <!-- add a task button  -->
                <div class="mb-4 flex justify-end">
                    <SecondaryButton @click="openTaskModal"><svg xmlns="http://www.w3.org/2000/svg" width="17"
                            height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus">
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                        </svg> Add Task</SecondaryButton>
                </div>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div
                        class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                        <!-- Filter and Search Options -->


                        <div>

                            <select id="task-filter" v-model="selectedFilter"
                                class="text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                <option value="all">All Tasks</option>
                                <option value="completed">Completed</option>
                                <option value="pending">Pending</option>
                            </select>
                        </div>

                        <!-- Search Bar -->
                        <label for="table-search" class="sr-only">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input type="text" id="table-search"
                                class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search for task" v-model="search" />
                        </div>
                    </div>

                    <!-- Tasks Table -->
                    <table class="w-full sm:rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead
                            class="text-xs border-b  sm:rounded-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">Title</th>
                                <th scope="col" class="px-6 py-3">Description</th>
                                <th scope="col" class="px-6 py-3">Status</th>
                                <th scope="col" class="px-6 py-3">Created At</th>
                                <th scope="col" class="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="task in props.tasks" :key="task.id"
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                                <td scope="row" class="px-6 py-4 ">
                                    {{ task.title }}
                                </td>
                                <td class="px-6 py-4">{{ task.description }}</td>
                                <td class="px-6 py-4">
                                    <span :class="task.status ? 'text-green-500' : 'text-red-500'">
                                        {{ task.status ? 'Completed' : 'Pending' }}
                                    </span>
                                </td>
                                <td class="px-6 py-4">{{ new Date(task.created_at).toLocaleDateString() }}</td>
                                <td class="px-6 py-4 flex space-x-2">
                                    <BasicButton @click="toggleComplete(task)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                                            viewBox="0 0 24 24" fill="none"
                                            :stroke="task.status ? 'green' : 'currentColor'" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-circle-check-big"
                                            :title="task.status ? 'Task Completed' : 'Task Pending'">
                                            <circle cx="12" cy="12" r="10"></circle> <!-- Circle around the check -->
                                            <path d="M9 12l2 2 4-4"></path> <!-- Checkmark inside the circle -->
                                        </svg>


                                    </BasicButton>
                                    <BasicButton @click="deleteTask(task)"><svg xmlns="http://www.w3.org/2000/svg"
                                            width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="red"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-trash-2">
                                            <path d="M3 6h18" />
                                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                            <line x1="10" x2="10" y1="11" y2="17" />
                                            <line x1="14" x2="14" y1="11" y2="17" />
                                        </svg></BasicButton>
                                </td>
                            </tr>
                            <tr v-if="props.tasks.length === 0" class="bg-white dark:bg-gray-800">
                                <td class="px-6 py-4 text-center" colspan="5">No tasks found</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <Modal :show="createTaskModal" @close="closeModal">
            <div class="p-6">
                <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
                    Create Task
                </h2>

                <form @submit.prevent="submitTask">
                    <div>
                        <InputLabel for="title" value="Title" />
                        <TextInput id="title" v-model="form.title" type="text" class="mt-1 block w-full" required
                            autofocus />
                        <InputError :message="form.errors.title" class="mt-2" />
                    </div>

                    <div class="mt-4">
                        <InputLabel for="description" value="Description" />
                        <TextArea id="description" v-model="form.description" class="mt-1 block w-full" rows="3" />
                        <InputError :message="form.errors.description" class="mt-2" />
                    </div>

                    <div class="flex items-center justify-end mt-4">
                        <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            Create Task
                        </PrimaryButton>
                    </div>
                </form>

            </div>
        </Modal>
    </AuthenticatedLayout>
</template>
