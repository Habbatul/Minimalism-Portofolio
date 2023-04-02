<?php
require_once __DIR__ . "/../Entity/Todolist.php";
require_once __DIR__ . "/../Repository/TodolistRepository.php";
require_once __DIR__ . "/../Service/TodolistService.php";
require_once __DIR__ . "/../Config/Database.php";

use Entity\Todolist;
use Service\TodolistServiceImpl;
use Repository\TodolistRepositoryImpl;


function testJsonTodolist()
{
    $connection = \Config\Database::getConnection();
    $todolistRepository = new TodolistRepositoryImpl($connection);
    $todolistService = new TodolistServiceImpl($todolistRepository);
    $data = $todolistService->ShowTodolist();
    //decode json menjadi object
    echo $data;
}

// if($_SERVER['REQUEST_METHOD'] == 'GET'){
//     header('HTTP/1.0 403 Forbidden');
//     die('Access Forbidden');
// }

// $current_uri = $_SERVER['REQUEST_URI'];
// $current_path = parse_url($current_uri, PHP_URL_PATH);
// if ($current_path == "/SimpleWeb-With-JSON/Services/test/get-data") {
//         header('HTTP/1.0 403 Forbidden');
     
//         die('Access Forbidden : '.$current_path);
// }

if (!isset($_SERVER['HTTP_REFERER']) || !strpos($_SERVER['HTTP_REFERER'], 'SimpleWeb-With-Json')) {
    header('HTTP/1.0 403 Forbidden');
    die('Access Forbidden');
}
header('Content-Type: application/json');
$data = testJsonTodolist();
?>