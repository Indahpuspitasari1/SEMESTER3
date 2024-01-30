# task API Spec

## Create task API

Endpoint: POST /api/tasks

Headers :

- Authorization : token

Request Body:

json
{
"title" : "pergi ke pasar",
"description" : "membeli bahan bahan dapur",
"due_date" : "19-10-2000",
"task_status": "on going",
"task_type" : "priority",
"task_repeat" : "weekly"
}

Response Body Success:

json
{
"data": {
"id": 1,
"title" : "pergi ke pasar",
"description" : "membeli bahan bahan dapur",
"due_date" : "19-10-2000",
"task_status": "on going",
"task_type" : "priority",
"task_repeat" : "weekly"
}
}

Response Body Error:

json
{
"error": "Task failed to add"
}

## Update task API

Endpoint: PUT /api/tasks/:id

Headers :

- Authorization : token

Request Body:

json
{
"title" : "pergi ke pasar",
"description" : "membeli bahan bahan dapur",
"due_date" : "19-10-2000",
"task_status": "on going",
"task_type" : "priority",
"task_repeat" : "weekly"
}

Response Body Success:

json
{
"data": {
"id": 1,
"title" : "pergi ke pasar",
"description" : "membeli bahan bahan dapur",
"due_date" : "19-10-2000",
"task_status": "on going",
"task_type" : "priority",
"task_repeat" : "weekly"
}
}

Response Body Error: "Task failed to add"

json
{
"error": "."
}

## Get task API

Endpoint: GET /api/tasks/:id

Headers :

- Authorization : token

Response Body Success:

json
{
"data": {
"id": 1,
"title" : "pergi ke pasar",
"description" : "membeli bahan bahan dapur",
"due_date" : "19-10-2000",
"task_status": "on going",
"task_type" : "priority",
"task_repeat" : "weekly"
}
}

Response Body Error:

json
{
"errors": "task failed..."
}

## Search task API

Endpoint: GET /api/tasks/:id

Headers :

- Authorization : token

Query params :

- title : Search by title, using like, optional
- description : Search by description, using like, optional
- page : number of page. dafault 1
- size : size per page, default 10

Response Body Success:

json
{
"data": [
{
"id": 1,
"title" : "pergi ke pasar",
"description" : "membeli bahan bahan dapur",
"due_date" : "19-10-2000",
"task_status": "on going",
"task_type" : "priority",
"task_repeat" : "weekly"
},
{
"id": 2,
"title" : "pergi ke pasar",
"description" : "membeli bahan bahan dapur",
"due_date" : "19-10-2000",
"task_status": "on going",
"task_type" : "priority",
"task_repeat" : "weekly"
}
],
"paging": {
"page": 1,
"total_page": 3,
"total_item": 30
}
}

Response Body Error:

json

## Remove task API

Endpoint: DELETE /api/tasks/:id

Headers :

- Authorization : token

Response Body Success:

json
{
"data": "OK"
}

Response Body Error:

json
{
"errors": "Produk tidak ditemukan"
}
