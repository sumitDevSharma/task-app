<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use App\Http\Requests\TaskUpdateRequest;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = Task::all();
        return Inertia::render('Tasks/Index', [
            'tasks' => $tasks,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        $task = [
            'user_id' => auth()->id(),
            'title' => $request->title,
            'description' => $request->description,
        ];

        Task::create($task);
        return redirect()->back()->with('success', 'Task created successfully.');
    }

    public function update(Task $task, TaskUpdateRequest $request)
    {
       
        $task->update($request->all());
        return redirect()->back()->with('success', 'Task updated successfully.');
    }


    public function markAsCompleted(Task $task, Request $request)
    {
        
        $status = $task->status;    
       
        $task->update(['status' => !$status ]);
        return redirect()->back()->with('success', 'Task marked as completed.');
    }
    


    public function destroy(Task $task)
    {
        $task->delete();
        return redirect()->back()->with('success', 'Task deleted successfully.');
    }
}
