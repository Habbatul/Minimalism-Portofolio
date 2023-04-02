<?php

require_once __DIR__ . "/../Entity/Todolist.php";
require_once __DIR__ . "/../Repository/TodolistRepository.php";
require_once __DIR__ . "/../Service/TodolistService.php";
require_once __DIR__ . "/../Config/Database.php";

use Entity\Todolist;
use Service\TodolistServiceImpl;
use Repository\TodolistRepositoryImpl;

//bila nanti fungsi digunakan secara synchronus
// function testJsonTodolist(): object
// {
//     $connection = \Config\Database::getConnection();
//     $todolistRepository = new TodolistRepositoryImpl($connection);
//     $todolistService = new TodolistServiceImpl($todolistRepository);
//     $data = $todolistService->ShowTodolist();
//     //decode json menjadi object
//     return json_decode($data);
// }


// function cobainJson()
// {
//     $connection = \Config\Database::getConnection();
//     $todolistRepository = new TodolistRepositoryImpl($connection);
//     $todolistService = new TodolistServiceImpl($todolistRepository);
//     $angka=0;
//     $data = $todolistService->ShowTodolist();
//     //decode json menjadi object
//     echo json_decode($data);
// }

//fungsi jika ingin json dalam bentuk file bukan respond
// function testShowTodolist(): object
// {
//     $data  = json_decode(file_get_contents("data.json"));
    
//     foreach ($data['data'] as $item) {
//         echo "ID: " . $item['ID'] . "<br>";
//         echo "Todolist: " . $item['todolist'] . "<br>";
//         echo "<br>";
//     }
    
//     foreach ($data->data as $item) {
//         echo "ID: " . $item->ID . "<br>";
//         echo "Todolist: " . $item->todolist . "<br>";
//         echo "<br>";
//     }
//     return $data;
// }

function testAddTodolist($todolist): void
{
    $connection = \Config\Database::getConnection();
    $todolistRepository = new TodolistRepositoryImpl($connection);
    $todolistService = new TodolistServiceImpl($todolistRepository);

    $todolistService->addTodolist($todolist);
}

function testRemoveTodolist($id): void
{
    $connection = \Config\Database::getConnection();
    $todolistRepository = new TodolistRepositoryImpl($connection);
    $todolistService = new TodolistServiceImpl($todolistRepository);
    
    echo $todolistService->removeTodolist($id);
}

function testChangeTodolist($id, $todo): void
{
    $connection = \Config\Database::getConnection();
    $todolistRepository = new TodolistRepositoryImpl($connection);
    $todolistService = new TodolistServiceImpl($todolistRepository);

    $todolistService->changeTodolist($id, $todo);
}



//fungsi delete
if(isset($_POST['deleteItem']))
{
    testRemoveTodolist($_POST['deleteItem']);
}

if(isset($_POST['updateItem']))
{
    testChangeTodolist($_POST['id'], $_POST['todo']);
}

?>

