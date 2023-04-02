<?php

namespace Service {

    use Entity\Todolist;
    use Repository\TodolistRepository;

    interface TodolistService
    {

        function ShowTodolist();

        function addTodolist(string $todo): void;

        function removeTodolist(int $number): void;

        function changeTodolist(int $id, string $todo): void;

    }

    class TodolistServiceImpl implements TodolistService
    {

        private TodolistRepository $todolistRepository;

        public function __construct(TodolistRepository $todolistRepository)
        {
            $this->todolistRepository = $todolistRepository;
        }

        function ShowTodolist()
        {
            
            $todolist = $this->todolistRepository->findAll();

            //dengan foreach
            // $rows = [];
            // foreach ($todolist as $number => $value) {
            //     $rows[] = ['ID'=>$value->getId(), 'todolist'=> $value->getTodo(),];
             
            // }

            //dengan mapping
            $rows = array_map(function($value) {
                return [
                    'ID' => $value->getId(),
                    'todolist' => $value->getTodo()
                ];
            }, $todolist);

            //jadikan array menjadi json
            $data = array('data' => $rows);
            //buat encode array menjadi json file
            return json_encode($data);
            
            //buat file json
            // file_put_contents('data.json', json_encode($data));
        }

        function addTodolist(string $todo): void
        {
            $todolist = new Todolist($todo);
            $this->todolistRepository->save($todolist);
            echo "<script>alert('SUKSES MENAMBAH TODOLIST')</script>";
        }

        function changeTodolist(int $id, string $todo): void
        {
            $this->todolistRepository->updateByID($id, $todo);
            echo "<script>alert('SUKSES MENGUBAH TODOLIST');window.location.href='index.html';</script>";
        }

        function removeTodolist($number): void
        {
            if ($this->todolistRepository->remove($number)) {
                echo "<script>alert('SUKSES MENGHAPUS TODOLIST');window.location.href='index.html';</script>";
            } else {
                echo "<script>alert('GAGAL MENGHAPUS TODOLIST');window.location.href='index.html';</script>";
            }
        }
    }

}
