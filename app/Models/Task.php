<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    // Define the table name
    protected $table = 'tasks';

    // Define the fillable columns
    protected $fillable = ['user_id','title', 'description', 'status'];


    // Define the relationship
    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
