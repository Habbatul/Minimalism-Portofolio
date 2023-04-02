<?php

namespace Config {

    class Database
    {

        static function getConnection(): \PDO
        {
            $host = "localhost";
            $database = "belajar_php_todolist";
            $username = "root";
            $password = "";
            
            return new \PDO("mysql:host=$host;dbname=$database", $username, $password);
        }

    }

}
