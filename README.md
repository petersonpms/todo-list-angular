# Todo-List Angular 8

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Arquitetura: Master / Detail

- core (centralização de módulos comuns a todo o sistema)
- shared (centralização de módulos compartilháveis)
  - components
    - base-resource-form (formulário base)
    - base-resource-list (listagem base)
    - page-header (componente de título das páginas)
    - bread-crumb (componente de migalhas de pão)
    - form-field-error (componente de tratamento / exibição de validações de formulários)
  - models
    - base-resource.model (model base)
  - services
    - base-resource.service (service base - CRUD Generico)
- pages
  - home
    - shared
      - task.model (model Tarefa)
      - task.service (service Tarefa)
    - todo-form (formulário das tarefas)
    - todo-list (listagem das tarefas)
- in-memory-database (base de dados local (in-memory) para simular backEnd)

## Bibliotecas

* Angular in-memory WebApi
* Prime NG
* Prime icons
* Toastr
* Currency Formatter
* Bootstrap 4 + jQuery

## Imprementações previstas

* PWA
* Unit Tests
* Componentizações...
